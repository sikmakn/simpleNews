import React, {MouseEventHandler} from 'react';
import styles from './userFormButton.module.scss';

export interface UserFormButtonProps {
    title: string
    onClick?: MouseEventHandler
}

const UserFormButton: React.FC<UserFormButtonProps> = ({title, onClick}) =>
    (<button className={styles.button} onClick={onClick}>{title}</button>);

export default UserFormButton;