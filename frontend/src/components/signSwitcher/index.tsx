import React from 'react';
import styles from './signSwitcher.module.scss';

export interface SignSwitcherProps {
    isSignUp: boolean
    setIsSignUp: (x: boolean) => void
}

const SignSwitcher: React.FC<SignSwitcherProps> =
    ({isSignUp, setIsSignUp}) =>
        (
            <div className={styles.switcherContainer}>
                <span
                    onClick={() => setIsSignUp(true)}
                    className={isSignUp ? styles.active : styles.unActive}
                >
                    Регистрация
                </span>
                <span
                    onClick={() => setIsSignUp(false)}
                    className={isSignUp ? styles.unActive : styles.active}
                >
                    Вход
                </span>
            </div>
        );

export default SignSwitcher;