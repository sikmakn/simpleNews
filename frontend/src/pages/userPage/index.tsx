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
import ErrorLayout from '../../components/errorsLayout';
import FormCheckErrors from '../../components/formCheckErrors';
import LogOutButtonHOC from '../../components/logoutButton/hoc';
import {checkManyValue} from '../../helpers/valueObj';
import fetchProcess from '../../types/fetching';
import Loader from '../../components/loader';

export interface UserPageProps {
    user: {
        username: string
        firstName: string
        lastName: string
        imgSrc?: string
    }

    updateUserData: (user: {
        username: string
        firstName: string
        lastName: string
        img?: File
        password: string
        newPassword?: string
    }) => void

    status?: fetchProcess
    error?: string

    clearStatus: () => void
}

const UserPage: React.FC<UserPageProps> =
    ({
         user: {username, firstName, lastName, imgSrc},
         updateUserData,
         status,
         error,
         clearStatus,
     }) => {
        const [selectedImg, setSelectedImg] = useState<File>();

        const [firstNameValueObj, setFirstNameValueObj] = useState<ValueObj>({value: firstName});
        const [lastNameValueObj, setLastNameValueObj] = useState<ValueObj>({value: lastName});
        const [passwordValueObj, setPasswordValueObj] = useState<ValueObj>();
        const [newPasswordValueObj, setNewPasswordValueObj] = useState<ValueObj>();
        const [usernameValue] = useState(username);

        useEffect(() => clearStatus, [clearStatus]);

        return (
            <>
                <HeaderHOC/>
                <main className={styles.main}>
                    <div className={styles.userForm}>
                        <h2>Изменение личной информации</h2>
                        {status === fetchProcess.success && 'Пользователь успешно изменен!'}
                        {status === fetchProcess.loading && <Loader size={40}/>}
                        <AddUserImage
                            setImg={setSelectedImg}
                            img={selectedImg}
                            defaultSrc={imgSrc}
                        />
                        <UserInput
                            disabled placeholder={username}
                            value={usernameValue}
                            className={styles.username}
                        />
                        <FirstNameInput
                            valueObj={firstNameValueObj}
                            setValueObj={setFirstNameValueObj}
                        />
                        <LastNameInput
                            setValueObj={setLastNameValueObj}
                            valueObj={lastNameValueObj}
                        />
                        <PasswordInput
                            placeholder="Новый пароль"
                            valueObj={newPasswordValueObj}
                            setValueObj={setNewPasswordValueObj}
                        />
                        <PasswordInput
                            valueObj={passwordValueObj}
                            setValueObj={setPasswordValueObj}
                            className={styles.newPassword}
                        />
                        <ErrorLayout>
                            <FormCheckErrors valueObj={{value: '', errors: error ? [error] : undefined}}/>
                            <FormCheckErrors valueObj={firstNameValueObj}/>
                            <FormCheckErrors valueObj={lastNameValueObj}/>
                            <FormCheckErrors valueObj={passwordValueObj}/>
                            {newPasswordValueObj?.value &&
                            <FormCheckErrors valueObj={newPasswordValueObj}/>}
                        </ErrorLayout>
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
                                    img: selectedImg
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