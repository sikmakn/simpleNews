import React, {useEffect, useRef, useState} from 'react';
import styles from './userPage.module.scss';
import UserFormButton from '../../components/userFormButton';
import LogOutButton from '../../components/logoutButton';
import UserInput from '../../components/userInput';
import AddUserImage from '../../components/addUserImage';
import HeaderHOC from '../../components/header/hoc';

const user = {
    id: '',
    username: 'SanyaNagibator',
    firstName: 'Nikita',
    lastName: 'Familia',
    imgSrc: process.env.PUBLIC_URL + '/user_logo.svg',
};

const UserPage: React.FC = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const [selectedImg, setSelectedImg] = useState<File>();

    useEffect(() => {
        if (user.imgSrc)
            fetch(user.imgSrc).then(e => e.blob())
                .then(b => setSelectedImg(b as File));
    }, [])

    useEffect(() => {
        if (!firstNameRef?.current) return;
        firstNameRef.current.value = user.firstName;
    }, [firstNameRef]);

    useEffect(() => {
        if (!lastNameRef?.current) return;
        lastNameRef.current.value = user.lastName;
    })

    return (
        <>
            <HeaderHOC/>
            <main className={styles.main}>
                <div className={styles.userForm}>
                    <h2>Изменение личной информации</h2>
                    <AddUserImage setImg={setSelectedImg} img={selectedImg}/>
                    <UserInput
                        disabled placeholder="Логин"
                        value={user.username}
                        className={styles.username}
                    />
                    <UserInput
                        inputRef={firstNameRef}
                        placeholder="Имя"
                        className={styles.firstName}
                    />
                    <UserInput
                        inputRef={lastNameRef}
                        placeholder="Фамилия"
                        className={styles.lastName}
                    />
                    <UserFormButton title="Сохранить изменения"/>
                    <LogOutButton/>
                </div>
            </main>
        </>
    );
}

export default UserPage;