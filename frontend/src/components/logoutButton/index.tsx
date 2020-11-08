import React from 'react';
import styles from './logoutButton.module.scss';

const LogOutButton: React.FC = () =>
    (<button className={styles.logoutButton}>Выйти</button>);

export default LogOutButton;