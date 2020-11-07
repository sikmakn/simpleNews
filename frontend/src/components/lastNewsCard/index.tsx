import React from 'react';
import styles from './lastNewsCard.module.scss';
import {Link} from 'react-router-dom';
import {oneNewsPagePath} from '../../paths';

export interface LastNewsCardProps {
    id: string
    date: Date
    title: string
}

const LastNewsCard: React.FC<LastNewsCardProps> =
    ({id, date, title}) => {
        const oneNewsPath = oneNewsPagePath(id);
        return (
            <Link to={oneNewsPath} className={styles.newsDescription}>
                <span>
                    {date.toLocaleString('ru', {
                        hour: 'numeric',
                        minute: 'numeric'
                    })}
                </span>
                {title}
            </Link>
        );
    }

export default LastNewsCard;