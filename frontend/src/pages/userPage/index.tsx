import React, {useEffect, useRef, useState} from 'react';
import styles from './userPage.module.scss';
import UserFormButton from '../../components/userFormButton';
import LogOutButton from '../../components/logoutButton';
import UserInput from '../../components/userInput';
import AddUserImage from '../../components/addUserImage';
import HeaderHOC from '../../components/header/hoc';

export interface UserPageProps {
    username: string
    firstName: string
    lastName: string
    imgSrc: string
}

const UserPage: React.FC<UserPageProps> =
    ({username, firstName, lastName, imgSrc}) => {
        const firstNameRef = useRef<HTMLInputElement>(null);
        const lastNameRef = useRef<HTMLInputElement>(null);
        const [selectedImg, setSelectedImg] = useState<File>();

        useEffect(() => {
            if (imgSrc)
                fetch(imgSrc).then(e => e.blob())
                    .then(b => setSelectedImg(b as File));
        }, [])

        useEffect(() => {
            if (!firstNameRef?.current) return;
            firstNameRef.current.value = firstName;
        }, [firstNameRef]);

        useEffect(() => {
            if (!lastNameRef?.current) return;
            lastNameRef.current.value = lastName;
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
                            value={username}
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