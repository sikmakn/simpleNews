import React, {useState} from 'react';
import styles from './addSubComment.module.scss';
import UserImage from '../userImage';
import ButtonContainer from '../buttonContainer';

export interface AddSubCommentProps {
    user: {
        username: string
        imgSrc: string
        firstName: string
        lastName: string
    }
    answerTo: {
        fullName: string
        username: string
    }
    commentId: string
    hide: () => void
    createSubComment: (subComment: {
        authorUsername: string
        answerToUsername: string
        text: string
        commentId: string
    }) => void
}

const AddSubComment: React.FC<AddSubCommentProps> =
    ({
         user,
         answerTo,
         commentId,
         hide,
         createSubComment,
     }) => {
        const [text, setText] = useState('');
        return (
            <div className={styles.commentContainer}>
                <UserImage src={user.imgSrc} size={36}/>
                <div>
                    <span className={styles.username}>{`${user.firstName} ${user.lastName}`}</span>
                    <div className={styles.commentText}>
                        {
                            answerTo &&
                            <span className={styles.answerReference}>
                                @{answerTo.fullName}&nbsp;
                            </span>
                        }
                        <textarea
                            defaultValue={text}
                            className={styles.textarea}
                            onChange={event => setText(event.target.value)}
                        />
                    </div>
                    <ButtonContainer
                        addButtonName="Сохранить"
                        onClickToAdd={() => {
                            createSubComment({
                                text,
                                commentId,
                                authorUsername: user.username,
                                answerToUsername: answerTo.username,
                            });
                            hide();
                        }}
                        onClickToCancel={hide}
                    />
                </div>
            </div>);
    }

export default AddSubComment;