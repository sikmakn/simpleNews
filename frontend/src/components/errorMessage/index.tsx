import React from 'react';
import styles from './errorMessage.module.scss';

export interface ErrorMessageProps {
    message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message}) =>
    <span className={styles.error}>{message}</span>;

export default ErrorMessage;