import React, {useState} from 'react';
import styles from './signUpForm.module.scss';

import {ValueObj} from '../checkInput';
import UserFormButton from '../userFormButton';
import PasswordInput from '../passwordInput';
import FirstNameInput from '../firstNameInput';
import LastNameInput from '../lastNameInput';
import FormCheckErrors from '../formCheckErrors';
import UsernameInput from '../usernameInput';

export interface SignUpFormProps {
    registerNewUser: (user: {
        username: string,
        password: string,
        firstName: string,
        lastName: string
    }) => void
}

const SignUpForm: React.FC<SignUpFormProps> = ({registerNewUser}) => {
    const [usernameValueObj, setUsernameValueObj] = useState<ValueObj>();
    const [firstNameValueObj, setFirstNameValueObj] = useState<ValueObj>();
    const [lastNameValueObj, setLastNameValueObj] = useState<ValueObj>();
    const [passwordValueObj, setPasswordValueObj] = useState<ValueObj>()

    return (
        <>
            <UsernameInput
                valueObj={usernameValueObj}
                setValueObj={setUsernameValueObj}
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
                valueObj={passwordValueObj}
                setValueObj={setPasswordValueObj}
                className={styles.password}
            />
            <span className={styles.errorContainer}>
                <FormCheckErrors valueObj={usernameValueObj}/>
                <FormCheckErrors valueObj={firstNameValueObj}/>
                <FormCheckErrors valueObj={lastNameValueObj}/>
                <FormCheckErrors valueObj={passwordValueObj}/>
            </span>
            <UserFormButton
                title="Зарегестрироваться"
                onClick={() => {
                    if (
                        !usernameValueObj?.errors ||
                        !firstNameValueObj?.errors ||
                        !lastNameValueObj?.errors ||
                        !passwordValueObj?.errors
                    ) {
                        registerNewUser({
                            username: usernameValueObj!.value,
                            password: passwordValueObj!.value,
                            firstName: firstNameValueObj!.value,
                            lastName: lastNameValueObj!.value
                        })
                    }
                }}
            />
        </>
    );
};

export default SignUpForm;