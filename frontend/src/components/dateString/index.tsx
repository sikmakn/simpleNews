import React from 'react';
import styles from './dateString.module.scss';

export interface DateProps {
    date: string
}

const DateString: React.FC<DateProps> = ({date}) =>
    (<span className={styles.date}>
        {
            (new Date(date)).toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            })}
    </span>)

export default DateString;