import React from 'react';
import styles from './horizontalStatistic.module.scss';
import Statistic from '../statistic';

export interface HorizontalStatisticProps{
    likesCount: number
    commentsCount: number
}

const HorizontalStatistic:React.FC<HorizontalStatisticProps> =
    (props) =>
        (<div className={styles.statistic}>
            <Statistic {...props}/>
        </div>);

export default HorizontalStatistic;