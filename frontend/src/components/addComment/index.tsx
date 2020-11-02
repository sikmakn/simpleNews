import React from 'react';
import styles from './addComment.module.scss';
import ButtonContainer from '../buttonContainer';

const AddComment: React.FC = () =>
    (<div className={styles.addContainer}>
        <img
            className={styles.userCommentImage}
            src={process.env.PUBLIC_URL + '/user_logo.svg'}
            alt=""
        />
        <div>
            <input type="text" placeholder="Оставьте комментарий"/>
            <ButtonContainer addButtonName={'Оставить комментарий'}/>
        </div>
    </div>);

export default AddComment;