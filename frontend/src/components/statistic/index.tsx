import React from 'react';
import makeFriendlyNumber from '../../helpers/makeFriendlyNumber';
import heartImg from '../../assets/heart.svg';
import activeHeartImg from '../../assets/heart_active.svg';
import commentImg from '../../assets/comment.svg';
import activeCommentImg from '../../assets/comment_active.svg';

export interface StatisticProps {
    statistic: {
        likesCount: number
        commentsCount: number
    }
    userStatistic?: {
        isLiked?: boolean
        isCommented?: boolean
    }
}

const Statistic: React.FC<StatisticProps> =
    ({statistic: {likesCount, commentsCount}, userStatistic}) =>
        (<>
            <div>
                <img src={userStatistic?.isLiked ? activeHeartImg : heartImg} alt=""/>
                {makeFriendlyNumber(likesCount)}
            </div>
            <div>
                <img src={userStatistic?.isCommented ? activeCommentImg : commentImg} alt=""/>
                {makeFriendlyNumber(commentsCount)}
            </div>
        </>);

export default Statistic;