import React from 'react';
import styles from './verticalStatistic.module.scss';
import Statistic from '../statistic';

export interface VerticalStatisticProps {
    likesCount: number
    commentsCount: number
}

const VerticalStatistic: React.FC<VerticalStatisticProps> = (props) => (
    <div className={styles.statisticsContainer}>
        <Statistic {...props}/>
        <img
            src={process.env.PUBLIC_URL + '/edit.svg'}
            className={styles.edit}
            alt=""
        />
    </div>
);

export default VerticalStatistic;