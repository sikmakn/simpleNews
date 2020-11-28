import React, {useState} from 'react';
import styles from './signUpForm.module.scss';

import {ValueObj} from '../checkInput';
import UserFormButton from '../userFormButton';
import PasswordInput from '../passwordInput';
import FirstNameInput from '../firstNameInput';
import LastNameInput from '../lastNameInput';
import FormCheckErrors from '../formCheckErrors';
import UsernameInput from '../usernameInput';
import ErrorLayout from '../errorsLayout';
import {checkManyValue} from '../../helpers/valueObj';
import fetchProcess from '../../types/fetching';
import Loader from '../loader';

export interface SignUpFormProps {
    registerNewUser: (user: {
        username: string,
        password: string,
        firstName: string,
        lastName: string
    }) => void
    status?: fetchProcess,
    errors?: string[]
}

const SignUpForm: React.FC<SignUpFormProps> =
    ({registerNewUser, status, errors}) => {
        const [usernameValueObj, setUsernameValueObj] = useState<ValueObj>();
        const [firstNameValueObj, setFirstNameValueObj] = useState<ValueObj>();
        const [lastNameValueObj, setLastNameValueObj] = useState<ValueObj>();
        const [passwordValueObj, setPasswordValueObj] = useState<ValueObj>()
        return (
            <>
                {
                    status === fetchProcess.loading && <Loader size={20}/>
                }
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
                <ErrorLayout>
                    <FormCheckErrors valueObj={{errors, value: ''}}/>

                    <FormCheckErrors valueObj={usernameValueObj}/>
                    <FormCheckErrors valueObj={firstNameValueObj}/>
                    <FormCheckErrors valueObj={lastNameValueObj}/>
                    <FormCheckErrors valueObj={passwordValueObj}/>
                </ErrorLayout>
                <UserFormButton
                    title="Зарегестрироваться"
                    onClick={() => {
                        if (checkManyValue([
                            usernameValueObj,
                            firstNameValueObj,
                            lastNameValueObj,
                            passwordValueObj,
                        ]))
                            registerNewUser({
                                username: usernameValueObj!.value,
                                password: passwordValueObj!.value,
                                firstName: firstNameValueObj!.value,
                                lastName: lastNameValueObj!.value
                            });
                    }}
                />
            </>
        );
    };

export default SignUpForm;