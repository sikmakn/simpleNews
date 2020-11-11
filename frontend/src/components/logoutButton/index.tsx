import React from 'react';
import styles from './logoutButton.module.scss';

export interface LogOutButtonProps {
    logOutUser: () => void
}

const LogOutButton: React.FC<LogOutButtonProps> = ({logOutUser}) =>
    (<button onClick={logOutUser} className={styles.logoutButton}>Выйти</button>);

export default LogOutButton;