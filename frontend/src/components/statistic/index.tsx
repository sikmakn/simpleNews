import React from 'react';
import makeFriendlyNumber from '../../helpers/makeFriendlyNumber';

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
                <img src={process.env.PUBLIC_URL + (isLiked ? '/heart_active.svg' : '/heart.svg')} alt=""/>
                {makeFriendlyNumber(likesCount)}
            </div>
            <div>
                <img src={process.env.PUBLIC_URL + (isCommented ? '/comment_active.svg' : '/comment.svg')} alt=""/>
                {makeFriendlyNumber(commentsCount)}
            </div>
        </>);

export default Statistic;