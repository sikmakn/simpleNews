import React from 'react';
import styles from './commentsCount.module.scss';
import Loader from '../loader';
import makeFriendlyNumber from '../../helpers/makeFriendlyNumber';
import fetchProcess from '../../types/fetching';

export interface CommentsCountProps {
    commentsCount?: number
    status?: fetchProcess
    error?: string
}

const CommentsCount: React.FC<CommentsCountProps> =
    ({status, error, commentsCount}) =>
        (<div className={styles.name}>
            Комментарии:
            {error}
            {status === fetchProcess.loading && <Loader size={20}/>}
            {commentsCount && <span>{makeFriendlyNumber(commentsCount)}</span>}
        </div>);

export default CommentsCount;