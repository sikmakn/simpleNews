import React, {useEffect, useState} from 'react';
import styles from './userPage.module.scss';
import UserFormButton from '../../components/userFormButton';
import UserInput from '../../components/userInput';
import AddUserImage from '../../components/addUserImage';
import HeaderHOC from '../../components/header/hoc';
import {ValueObj} from '../../components/checkInput';
import PasswordInput from '../../components/passwordInput';
import FirstNameInput from '../../components/firstNameInput';
import LastNameInput from '../../components/lastNameInput';
import FormCheckErrorLayout from '../../components/formCheckErrorsLayout';
import FormCheckErrors from '../../components/formCheckErrors';
import LogOutButtonHOC from '../../components/logoutButton/hoc';
import {checkManyValue} from '../../helpers/valueObj';

export interface UserPageProps {
    user: {
        username: string
        firstName: string
        lastName: string
        imgSrc: string
    }

    updateUserData: (user: {
        username: string
        firstName: string
        lastName: string
        img: File
        password: string
        newPassword?: string
    }) => void
}

const UserPage: React.FC<UserPageProps> =
    ({user: {username, firstName, lastName, imgSrc}, updateUserData}) => {
        const [selectedImg, setSelectedImg] = useState<File>();

        const [firstNameValueObj, setFirstNameValueObj] = useState<ValueObj>({value: firstName});
        const [lastNameValueObj, setLastNameValueObj] = useState<ValueObj>({value: lastName});
        const [passwordValueObj, setPasswordValueObj] = useState<ValueObj>();
        const [newPasswordValueObj, setNewPasswordValueObj] = useState<ValueObj>();

        useEffect(() => {
            if (imgSrc)
                fetch(imgSrc).then(e => e.blob())
                    .then(b => setSelectedImg(b as File));
        }, [imgSrc])


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
                        <FormCheckErrorLayout>
                            <FormCheckErrors valueObj={firstNameValueObj}/>
                            <FormCheckErrors valueObj={lastNameValueObj}/>
                            <FormCheckErrors valueObj={passwordValueObj}/>
                            {
                                newPasswordValueObj?.value &&
                                <FormCheckErrors valueObj={newPasswordValueObj}/>
                            }
                        </FormCheckErrorLayout>
                        <UserFormButton
                            title="Сохранить изменения"
                            onClick={() => {
                                if (!checkManyValue([
                                    firstNameValueObj,
                                    lastNameValueObj,
                                    passwordValueObj
                                ])) return;
                                if (newPasswordValueObj?.value && newPasswordValueObj.errors) return;

                                updateUserData({
                                    username,
                                    firstName: firstNameValueObj!.value,
                                    lastName: lastNameValueObj!.value,
                                    password: passwordValueObj!.value,
                                    newPassword: newPasswordValueObj?.value,
                                    img: selectedImg!
                                })
                            }}
                        />
                        <LogOutButtonHOC/>
                    </div>
                </main>
            </>
        );
    }

export default UserPage;