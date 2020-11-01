import React from 'react';
import styles from './date.module.scss';

export interface DateProps {
    date: Date
}

const Date: React.FC<DateProps> = ({date}) =>
    (<span className={styles.date}>
        {
            date.toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            })}
    </span>)

export default Date;