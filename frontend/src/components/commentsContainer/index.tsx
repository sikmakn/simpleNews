import React from 'react';
import styles from './commentsContainer.module.scss';
import Comment, {CommentProps} from '../comment';

export interface CommentsContainerProps {
    oneNewsId?: string
    comments?: [CommentProps]
    loadComments: (oneNewsId: string) => void
}

const CommentsContainer: React.FC<CommentsContainerProps> =
    ({comments, loadComments, oneNewsId}) => {
        if (oneNewsId && !comments) loadComments(oneNewsId);
        return (<div className={styles.commentsContainer}>
            {comments?.map(c => <Comment key={c.id} {...c}/>)}
        </div>);
    }

export default CommentsContainer;