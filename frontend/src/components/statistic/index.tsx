import React from 'react';
import makeFriendlyNumber from '../../helpers/makeFriendlyNumber';
import heartImg from '../../assets/heart.svg';
import activeHeartImg from '../../assets/heart_active.svg';
import commentImg from '../../assets/comment.svg';
import activeCommentImg from '../../assets/comment_active.svg';

export interface StatisticProps {
    id: string
    fullStatistic: {
        statistic: {
            likesCount: number
            commentsCount: number
        }
        userStatistic?: {
            isLiked?: boolean
            isCommented?: boolean
        }
    }
    updateLike: (params: {
        id: string
        username: string
        value: boolean
    }) => void
    username?: string
}

const Statistic: React.FC<StatisticProps> =
    ({
         id,
         username,
         updateLike,
         fullStatistic: {userStatistic, statistic},
     }) => (<>
        <div onClick={() => {
            if (username && userStatistic)
                updateLike({
                    username,
                    id,
                    value: !userStatistic.isLiked
                });
        }}>
            <img src={userStatistic?.isLiked ? activeHeartImg : heartImg} alt=""/>
            {makeFriendlyNumber(statistic.likesCount)}
        </div>
        <div>
            <img src={userStatistic?.isCommented ? activeCommentImg : commentImg} alt=""/>
            {makeFriendlyNumber(statistic.commentsCount)}
        </div>
    </>);


export default Statistic;