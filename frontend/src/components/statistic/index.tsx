import React from 'react';
import makeFriendlyNumber from '../../helpers/makeFriendlyNumber';
import heartImg from '../../assets/heart.svg';
import activeHeartImg from '../../assets/heart_active.svg';
import commentImg from '../../assets/comment.svg';
import activeCommentImg from '../../assets/comment_active.svg';

export interface StatisticProps {
    likesCount: number
    isLiked?: boolean
    commentsCount: number
    isCommented?: boolean
}

const Statistic: React.FC<StatisticProps> =
    ({likesCount, commentsCount, isLiked = false, isCommented = false}) =>
        (<>
            <div>
                <img src={isLiked ? activeHeartImg : heartImg} alt=""/>
                {makeFriendlyNumber(likesCount)}
            </div>
            <div>
                <img src={isCommented ? activeCommentImg : commentImg} alt=""/>
                {makeFriendlyNumber(commentsCount)}
            </div>
        </>);

export default Statistic;