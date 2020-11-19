import User from '../db/models/User';
import connection from '../db/connection';
import makeRandomString from '../helpers/makeRandomString';
import argon2 from 'argon2';

const userRepository = connection.getRepository(User);

export async function create(
    {password, ...userBasic}:
        {
            username: string
            password: string
            firstName: string
            lastName: string
        }) {
    const {hashedPassword, salt} = await createPassword(password);
    return userRepository.create({password: hashedPassword, salt, ...userBasic});
}

export async function find(username: string) {
    return userRepository.findByPk(username);
}

export async function validate({username, password}: { username: string, password: string }) {
    const user = await userRepository.findByPk(username);
    if (!user) return false;
    return await argon2.verify(user.password,
        `${password}.${process.env.STATIC_SALT}.${user.salt}`);
}

export async function update(
    {
        username,
        password,
        newPassword,
        img,
        ...name
    }:
        {
            username: string
            password: string
            newPassword: string
            firstName: string
            lastName: string
            img?: File
        }) {
    //todo made to fileStorage img
    let newUser;
    if (newPassword) {
        const {hashedPassword, salt} = await createPassword(newPassword);
        newUser = {
            username,
            salt,
            password: hashedPassword,
            ...name,
        };
    } else {
        newUser = {
            username,
            ...name,
        };
    }
    return userRepository.update(newUser,
        {where: {username}});
}

async function createPassword(password: string) {
    const dynamicSalt = makeRandomString();
    const saltedPassword = `${password}.${process.env.STATIC_SALT}.${dynamicSalt}`;
    const hashedPassword = await argon2.hash(saltedPassword);
    return {hashedPassword, salt: dynamicSalt};
}