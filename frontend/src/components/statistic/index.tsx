import React from 'react';
import styles from './statistic.module.scss';
import makeFriendlyNumber from "../../helpers/makeFriendlyNumber";

export interface StatisticProps {
    likesCount: number
    isLiked?: boolean
    commentsCount: number
    isCommented?: boolean
}

const Statistic: React.FC<StatisticProps> =
    ({likesCount, commentsCount, isLiked = false, isCommented = false}) =>
        (
            <div className={styles.statistic}>
                <div>
                    <img src={isLiked ? 'heart_active.svg' : 'heart.svg'} alt=""/>
                    {makeFriendlyNumber(likesCount)}
                </div>
                <div>
                    <img src={isCommented ? 'comment_active.svg' : 'comment.svg'} alt=""/>
                    {makeFriendlyNumber(commentsCount)}
                </div>
            </div>
        );

export default Statistic;