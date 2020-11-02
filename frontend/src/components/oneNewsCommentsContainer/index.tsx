import React from 'react';
import styles from './oneNewsCommentsContainer.module.scss';
import makeFriendlyNumber from '../../helpers/makeFriendlyNumber';
import AddComment from '../addComment';
import ExistingCommentsContainer from '../existingCommentsContainer';

const commentCount = 11500;

const OneNewsCommentsContainer: React.FC = () =>
    (<div className={styles.commentContainer}>
        <div className={styles.name}>
            Комментарии: <span>{makeFriendlyNumber(commentCount)}</span>
        </div>
        <AddComment/>
        <ExistingCommentsContainer/>
    </div>);

export default OneNewsCommentsContainer;