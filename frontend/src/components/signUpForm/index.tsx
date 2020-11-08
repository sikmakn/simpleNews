import React, {useState} from 'react';
import styles from './signUpForm.module.scss';
import CheckInput, {ValueObj} from '../checkInput';
import UserFormButton from '../userFormButton';

const USERNAME_REGEX = /^[a-zA-Z0-9]{4,20}$/;
const NAME_REGEX = /^[а-яА-Я]{3,20}$/;
const PASSWORD_REGEX = /^.{6,20}$/;

const SignUpForm: React.FC = () => {
    const [usernameValueObj, setUsernameValueObj] = useState<ValueObj>();
    const [firstNameValueObj, setFirstNameValueObj] = useState<ValueObj>();
    const [lastNameValueObj, setLastNameValueObj] = useState<ValueObj>();
    const [passwordValueObj, setPasswordValueObj] = useState<ValueObj>()

    return (
        <>
            <CheckInput
                className={styles.login}
                placeholder="Логин"
                valueObj={usernameValueObj}
                regExp={USERNAME_REGEX}
                errorsText={[
                    'Логин должен от 4 до 20 символов',
                    'Логин содержать только латинские буквы и цифры'
                ]}
                setValueObj={setUsernameValueObj}
            />
            <CheckInput
                placeholder="Имя"
                className={styles.firstName}
                setValueObj={setFirstNameValueObj}
                valueObj={firstNameValueObj}
                regExp={NAME_REGEX}
                errorsText={[
                    'Имя может содержать от 3 до 20 символов',
                    'Имя может состоять только из букв кирилицы'
                ]}
            />
            <CheckInput
                placeholder="Фамилия"
                errorsText={[
                    'Фамилия может содержать от 3 до 20 символов',
                    'Фамилия может состоять только из букв кирилицы'
                ]}
                setValueObj={setLastNameValueObj}
                valueObj={lastNameValueObj}
                className={styles.lastName}
                regExp={NAME_REGEX}
            />
            <CheckInput
                placeholder="Пароль"
                errorsText={[
                    'Пароль должен быть длиннее 6 и короче 20 символов'
                ]}
                type="password"
                setValueObj={setPasswordValueObj}
                valueObj={passwordValueObj}
                className={styles.password}
                regExp={PASSWORD_REGEX}
            />
            <span className={styles.errorContainer}>
                {usernameValueObj?.errors?.map((err, i) =>
                    <span key={i} className={styles.error}>{err}</span>
                )}
                {firstNameValueObj?.errors?.map((err, i) =>
                    <span key={i} className={styles.error}>{err}</span>
                )}
                {lastNameValueObj?.errors?.map((err, i) =>
                    <span key={i} className={styles.error}>{err}</span>
                )}
                {passwordValueObj?.errors?.map((err, i) =>
                    <span key={i} className={styles.error}>{err}</span>
                )}
            </span>
            <UserFormButton
                title="Зарегестрироваться"
                onClick={() => {

                }}
            />
        </>
    );
};

export default SignUpForm;