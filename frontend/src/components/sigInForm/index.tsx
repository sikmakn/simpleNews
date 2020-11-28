import React, {useState} from 'react';
import styles from './signIn.module.scss';
import UserFormButton from '../userFormButton';
import UsernameInput from '../usernameInput';
import {ValueObj} from '../checkInput';
import PasswordInput from '../passwordInput';
import ErrorLayout from '../errorsLayout';
import FormCheckErrors from '../formCheckErrors';
import checkValue from '../../helpers/valueObj';
import fetchProcess from '../../types/fetching';
import Loader from '../loader';

export interface SignInFormProps {
    signInUser: (user: { username: string, password: string }) => void
    status?: fetchProcess
    errors?: string[]
}

const SignInForm: React.FC<SignInFormProps> =
    ({signInUser, status, errors}) => {
        const [usernameValueObj, setUsernameValueObj] = useState<ValueObj>();
        const [passwordValueObj, setPasswordValueObj] = useState<ValueObj>();

        return (
            <div className={styles.form}>
                {status === fetchProcess.loading && <Loader size={20}/>}
                <UsernameInput
                    valueObj={usernameValueObj}
                    setValueObj={setUsernameValueObj}
                    className={styles.username}
                />
                <PasswordInput
                    valueObj={passwordValueObj}
                    setValueObj={setPasswordValueObj}
                    className={styles.password}
                />
                <ErrorLayout>
                    <FormCheckErrors valueObj={{errors, value: ''}}/>
                    <FormCheckErrors valueObj={usernameValueObj}/>
                    <FormCheckErrors valueObj={passwordValueObj}/>
                </ErrorLayout>

                <UserFormButton title="Войти" onClick={() => {
                    if (!checkValue(usernameValueObj) || !checkValue(passwordValueObj)) return;

                    signInUser({
                        username: usernameValueObj!.value,
                        password: passwordValueObj!.value
                    });
                }}/>
            </div>
        );
    };

export default SignInForm;