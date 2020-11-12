import React from 'react';
import styles from './horizontalStatistic.module.scss';
import Statistic from '../statistic';

export interface HorizontalStatisticProps {
    statistic: {
        likesCount: number
        commentsCount: number
    }
    userStatistic?:{
        isLiked?:boolean
        isCommented?:boolean
    }
}

const HorizontalStatistic: React.FC<HorizontalStatisticProps> =
    (props) =>
        (<div className={styles.statistic}>
            <Statistic {...props}/>
        </div>);

export default HorizontalStatistic;