import React, {useRef} from 'react';
import styles from './signIn.module.scss';
import UserFormButton from '../userFormButton';
import UserInput from '../userInput';

export interface SignInFormProps {
    signInUser: (user: { username: string, password: string }) => void
}

const SignInForm: React.FC<SignInFormProps> = ({signInUser}) => {
    const loginInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    return (
        <div className={styles.form}>
            <UserInput
                className={styles.login}
                placeholder="Логин"
                inputRef={loginInputRef}
            />
            <UserInput
                className={styles.password}
                inputRef={passwordInputRef}
                type="password" placeholder="Пароль"
            />
            <UserFormButton title="Войти" onClick={() => {
                if (!loginInputRef?.current || !passwordInputRef?.current) return;

                signInUser({
                    username: loginInputRef.current.value,
                    password: passwordInputRef.current.value
                });
            }}/>
        </div>
    );
};

export default SignInForm;