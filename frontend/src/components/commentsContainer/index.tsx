import React, {useEffect} from 'react';
import styles from './commentsContainer.module.scss';
import FullComment, {FullCommentProps} from '../fullComment';
import Loader from '../loader';
import fetchProcess from '../../types/fetching';

export interface CommentsContainerProps {
    oneNewsId: string
    comments?: [FullCommentProps]
    loadComments: (oneNewsId: string) => void
    status: fetchProcess
    error: string
    cleanStatus: () => void
}

const CommentsContainer: React.FC<CommentsContainerProps> =
    ({
         comments,
         loadComments,
         oneNewsId,
         error,
         status,
         cleanStatus,
     }) => {

        useEffect(() => loadComments(oneNewsId),
            [oneNewsId, loadComments]);

        useEffect(() => cleanStatus, [cleanStatus]);

        return (
            <div className={styles.commentsContainer}>
                {error}
                {status === fetchProcess.loading && <Loader size={150}/>}
                {comments?.map(c => <FullComment key={c.id} {...c}/>)}
            </div>
        );
    }

export default CommentsContainer;