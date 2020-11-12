import React from 'react';
import styles from './notSignedAddComment.module.scss';

export interface NotSignedAddCommentProps {

}

const NotSignedAddComment:React.FC<NotSignedAddCommentProps>=()=>
    (<div className={styles.addContainer}>
        <p>Незарегстрированные пользователи не могут оставлять комментарии</p>
    </div>);

export default NotSignedAddComment;