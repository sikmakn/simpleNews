import React, {useEffect, useRef} from 'react';
import styles from './userPage.module.scss';
import Header from '../../components/header';
import UserFormButton from '../../components/userFormButton';
import defaultUserImg from '../../assets/no-image.png';
import LogOutButton from "../../components/logoutButton";
import UserInput from "../../components/userInput";
import AddUserImage from "../../components/addUserImage";

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
            <Header/>
            <main className={styles.main}>
                <div className={styles.userForm}>
                    {/*todo*/}
                    {/*<AddUserImage setImg={} img={}/>*/}
                    {/*<UserImage src={user.imgSrc || defaultUserImg} size={163}/>*/}
                    <UserInput disabled placeholder="Логин" value={user.username}/>
                    <UserInput inputRef={firstNameRef} placeholder="Имя"/>
                    <UserInput inputRef={lastNameRef} placeholder="Фамилия"/>
                    <UserFormButton title={'Сохранить изменения'}/>
                    <LogOutButton/>
                </div>
            </main>
        </>
    );
}

export default UserPage;