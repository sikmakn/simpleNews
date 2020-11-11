import React, {useState} from 'react';
import styles from './signIn.module.scss';
import UserFormButton from '../userFormButton';
import UsernameInput from '../usernameInput';
import {ValueObj} from '../checkInput';
import PasswordInput from '../passwordInput';
import FormCheckErrorLayout from '../formCheckErrorsLayout';
import FormCheckErrors from '../formCheckErrors';
import checkValue from "../../helpers/valueObj";

export interface SignInFormProps {
    signInUser: (user: { username: string, password: string }) => void
}

const SignInForm: React.FC<SignInFormProps> = ({signInUser}) => {
    const [usernameValueObj, setUsernameValueObj] = useState<ValueObj>();
    const [passwordValueObj, setPasswordValueObj] = useState<ValueObj>();

    return (
        <div className={styles.form}>
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
            <FormCheckErrorLayout>
                <FormCheckErrors valueObj={usernameValueObj}/>
                <FormCheckErrors valueObj={passwordValueObj}/>
            </FormCheckErrorLayout>

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