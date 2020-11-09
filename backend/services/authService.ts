import jwt from 'jsonwebtoken';

const {
    JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRES_HOURS,
    JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRES_HOURS
} = process.env;

export async function createToken(username: string) {
    const accessToken = jwt.sign({username},
        JWT_ACCESS_SECRET as string,
        {expiresIn: JWT_ACCESS_EXPIRES_HOURS});
    const refreshToken = jwt.sign({username},
        JWT_REFRESH_SECRET as string,
        {expiresIn: JWT_REFRESH_EXPIRES_HOURS});
    return {accessToken, refreshToken};
}

export async function verifyAccessToken(token: string) {
    return !!jwt.verify(token, JWT_ACCESS_SECRET as string);
}

export async function updateRefreshToken(token: string) {
    try {
        jwt.verify(token, JWT_REFRESH_SECRET as string);
    } catch (e) {
        return null;
    }
    const {username} = jwt.decode(token) as { [key: string]: any };
    return jwt.sign({username},
        JWT_REFRESH_SECRET as string,
        {expiresIn: JWT_REFRESH_EXPIRES_HOURS})
}