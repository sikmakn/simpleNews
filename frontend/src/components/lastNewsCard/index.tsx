import React from 'react';
import styles from './lastNewsCard.module.scss';
import {Link} from "react-router-dom";

export interface LastNewsCardProps {
    id: string
    date: Date
    title: string
}

const LastNewsCard: React.FC<LastNewsCardProps> =
    ({id, date, title}) =>
        (
            <Link to={`news/${id}`} className={styles.newsDescription}>
                <span>
                    {date.toLocaleString('ru', {
                        hour: 'numeric',
                        minute: 'numeric'
                    })}
                </span>
                {title}
            </Link>
        );

export default LastNewsCard;