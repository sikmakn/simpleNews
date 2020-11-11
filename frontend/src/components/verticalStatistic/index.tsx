import React from 'react';
import styles from './verticalStatistic.module.scss';
import Statistic from '../statistic';
import editImg from '../../assets/edit.svg';
import {Link} from 'react-router-dom';
import {editOneNewsPagePath} from '../../paths';

export interface VerticalStatisticProps {
    id?: string
    authorUsername: string
    likesCount?: number
    commentsCount?: number
    user: {
        username: string
    }
}

const VerticalStatistic: React.FC<VerticalStatisticProps> =
    ({id, user, authorUsername, ...statistic}) => (
        <div className={styles.statisticsContainer}>
            <Statistic {...statistic}/>
            {
                user && authorUsername === user.username &&
                <Link to={editOneNewsPagePath(id!)}>
                    <img
                        src={editImg}
                        className={styles.edit}
                        alt=""
                    />
                </Link>
            }
        </div>
    );

export default VerticalStatistic;