import React from 'react';
import styles from './verticalStatistic.module.scss';
import Statistic from '../statistic';
import editImg from '../../assets/edit.svg';
import {Link} from 'react-router-dom';
import {editOneNewsPagePath} from '../../paths';
import Loader from '../loader';

export interface VerticalStatisticProps {
    oneNews: {
        id: string
        authorUsername: string
        statistic: {
            likesCount: number
            commentsCount: number
        }
    }
    user: {
        username: string
    }
}

const VerticalStatistic: React.FC<VerticalStatisticProps> =
    ({user, oneNews}) => {
        if (!oneNews) return <Loader size={50}/>;
        return (
            <div className={styles.statisticsContainer}>
                <Statistic {...oneNews.statistic}/>
                {
                    user && oneNews.authorUsername === user.username &&
                    <Link to={editOneNewsPagePath(oneNews.id!)}>
                        <img
                            src={editImg}
                            className={styles.edit}
                            alt=""
                        />
                    </Link>
                }
            </div>
        );
    }

export default VerticalStatistic;