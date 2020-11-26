import React from 'react';
import styles from './oneNewsCommentsContainer.module.scss';
import AddCommentContainerHOC from '../addCommentContainer/hoc';
import CommentsContainerHOC from '../commentsContainer/hoc';
import CommentsCountHOC from '../commentsCount/hoc';

export interface OneNewsCommentsContainerProps {
    commentCount?: number
}

const OneNewsCommentsContainer: React.FC<OneNewsCommentsContainerProps> =
    () =>
        (
            <div className={styles.commentsContainer}>
                <CommentsCountHOC/>
                <AddCommentContainerHOC/>
                <CommentsContainerHOC/>
            </div>
        );


export default OneNewsCommentsContainer;