import React from 'react';
import styles from './lastNewsCard.module.scss';
import {Link} from 'react-router-dom';
import {oneNewsPagePath} from '../../paths';

export interface LastNewsCardProps {
    id: string
    date: string
    title: string
}

const LastNewsCard: React.FC<LastNewsCardProps> =
    ({id, date, title}) => {
        const oneNewsPath = oneNewsPagePath(id);
        return (
            <Link to={oneNewsPath} className={styles.newsDescription}>
                <span>
                    {new Date(date).toLocaleString('ru', {
                        hour: 'numeric',
                        minute: 'numeric'
                    })}
                </span>
                {title}
            </Link>
        );
    }

export default LastNewsCard;