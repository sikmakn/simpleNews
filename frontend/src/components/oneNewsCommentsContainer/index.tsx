import React from 'react';
import styles from './oneNewsCommentsContainer.module.scss';
import makeFriendlyNumber from '../../helpers/makeFriendlyNumber';
import AddComment from '../addComment';
import CommentsContainer from '../commentsContainer';

const commentCount = 11500;

const OneNewsCommentsContainer: React.FC = () =>
    (<div className={styles.commentsContainer}>
        <div className={styles.name}>
            Комментарии: <span>{makeFriendlyNumber(commentCount)}</span>
        </div>
        <AddComment/>
        <CommentsContainer/>
    </div>);

export default OneNewsCommentsContainer;