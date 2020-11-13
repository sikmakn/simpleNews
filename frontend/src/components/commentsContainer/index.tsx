import React, {useEffect} from 'react';
import styles from './commentsContainer.module.scss';
import Comment, {CommentProps} from '../comment';
import Loader from '../loader';

export interface CommentsContainerProps {
    oneNewsId?: string
    comments?: [CommentProps]
    loadComments: (oneNewsId: string) => void
}

const CommentsContainer: React.FC<CommentsContainerProps> =
    ({comments, loadComments, oneNewsId}) => {
        useEffect(() => {
            if (!comments && oneNewsId) loadComments(oneNewsId);
        }, [oneNewsId, comments, loadComments]);

        return (<div className={styles.commentsContainer}>
            {!comments && <Loader size={150}/>}
            {comments?.map(c => <Comment key={c.id} {...c}/>)}
        </div>);
    }

export default CommentsContainer;