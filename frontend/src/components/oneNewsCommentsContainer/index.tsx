import React from 'react';
import styles from './oneNewsCommentsContainer.module.scss';
import AddCommentContainerHOC from '../addCommentContainer/hoc';
import CommentsContainerHOC from '../commentsContainer/hoc';
import CommentsCountHOC from '../commentsCount/hoc';

export interface OneNewsCommentsContainerProps {
    commentCount?: number
    loadCountOfComments: () => void
    oneNewsId: string
}

const OneNewsCommentsContainer: React.FC<OneNewsCommentsContainerProps> =
    ({oneNewsId}) =>
        (
            <div className={styles.commentsContainer}>
                <CommentsCountHOC/>
                <AddCommentContainerHOC/>
                <CommentsContainerHOC oneNewsId={oneNewsId}/>
            </div>
        );


export default OneNewsCommentsContainer;