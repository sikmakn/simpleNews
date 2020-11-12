import React from 'react';
import styles from './oneNewsCommentsContainer.module.scss';
import makeFriendlyNumber from '../../helpers/makeFriendlyNumber';
import AddCommentContainerHOC from '../addCommentContainer/hoc';
import CommentsContainerHOC from '../commentsContainer/hoc';
import Loader from '../loader';

export interface OneNewsCommentsContainerProps {
    commentCount?: number
    loadCountOfComments: () => void
}

const OneNewsCommentsContainer: React.FC<OneNewsCommentsContainerProps> =
    ({commentCount, loadCountOfComments}) => {
        if (commentCount === undefined) loadCountOfComments();
        return (
            <div className={styles.commentsContainer}>
                <div className={styles.name}>
                    Комментарии: {
                    commentCount === undefined ? <Loader size={20}/> :
                        <span>{makeFriendlyNumber(commentCount)}</span>
                }
                </div>
                <AddCommentContainerHOC/>
                <CommentsContainerHOC/>
            </div>
        );
    }

export default OneNewsCommentsContainer;