import React, {useEffect, useState} from 'react';
import styles from './userPage.module.scss';
import UserFormButton from '../../components/userFormButton';
import LogOutButton from '../../components/logoutButton';
import UserInput from '../../components/userInput';
import AddUserImage from '../../components/addUserImage';
import HeaderHOC from '../../components/header/hoc';
import {ValueObj} from '../../components/checkInput';
import PasswordInput from '../../components/passwordInput';
import FirstNameInput from '../../components/firstNameInput';
import LastNameInput from '../../components/lastNameInput';

export interface UserPageProps {
    username: string
    firstName: string
    lastName: string
    imgSrc: string
}

const UserPage: React.FC<UserPageProps> =
    ({username, firstName, lastName, imgSrc}) => {
        const [selectedImg, setSelectedImg] = useState<File>();

        const [firstNameValueObj, setFirstNameValueObj] = useState<ValueObj>({value: firstName});
        const [lastNameValueObj, setLastNameValueObj] = useState<ValueObj>({value: lastName});
        const [passwordValueObj, setPasswordValueObj] = useState<ValueObj>();
        const [newPasswordValueObj, setNewPasswordValueObj] = useState<ValueObj>();

        useEffect(() => {
            if (imgSrc)
                fetch(imgSrc).then(e => e.blob())
                    .then(b => setSelectedImg(b as File));
        }, [])


        return (
            <>
                <HeaderHOC/>
                <main className={styles.main}>
                    <div className={styles.userForm}>
                        <h2>Изменение личной информации</h2>
                        <AddUserImage setImg={setSelectedImg} img={selectedImg}/>
                        <UserInput
                            disabled placeholder="Логин"
                            value={username}
                            className={styles.username}
                        />
                        <FirstNameInput
                            valueObj={firstNameValueObj}
                            setValueObj={setFirstNameValueObj}
                            className={styles.firstName}
                        />
                        <LastNameInput
                            setValueObj={setLastNameValueObj}
                            valueObj={lastNameValueObj}
                            className={styles.lastName}
                        />
                        <PasswordInput
                            placeholder="Новый пароль"
                            valueObj={newPasswordValueObj}
                            setValueObj={setNewPasswordValueObj}
                        />
                        <PasswordInput
                            valueObj={passwordValueObj}
                            setValueObj={setPasswordValueObj}
                        />
                        <UserFormButton title="Сохранить изменения"/>
                        <LogOutButton/>
                    </div>
                </main>
            </>
        );
    }

export default UserPage;