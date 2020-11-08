import React, {useRef} from 'react';
import styles from './signIn.module.scss';
import UserFormButton from '../userFormButton';
import UserInput from '../userInput';

const SignInForm: React.FC = () => {
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

                const login = loginInputRef.current.value;
                const password = passwordInputRef.current.value;


            }}/>
        </div>
    );
};

export default SignInForm;