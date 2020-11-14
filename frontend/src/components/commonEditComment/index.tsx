import React, {useState} from 'react';
import styles from './commonEditComment.module.scss';
import UserImage from '../userImage';
import ButtonContainer from '../buttonContainer';

export interface CommonEditCommentProps {
    user: {
        username: string
        imgSrc: string
        firstName: string
        lastName: string
    }
    answerTo?: {
        fullName: string
        username: string
    }
    text?: string
    subCommentId?: string
    commentId: string
    hide: () => void
    saveComment: (subComment: {
        authorUsername: string
        answerToUsername?: string
        text: string
        commentId: string
        subCommentId?: string
    }) => void
}

const CommonEditComment: React.FC<CommonEditCommentProps> =
    ({
         user,
         answerTo,
         commentId,
         hide,
         saveComment,
         text: defaultText,
         subCommentId
     }) => {
        const [text, setText] = useState(defaultText || '');
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
                            saveComment({
                                subCommentId,
                                text,
                                commentId,
                                authorUsername: user.username,
                                answerToUsername: answerTo?.username,
                            });
                            hide();
                        }}
                        onClickToCancel={hide}
                    />
                </div>
            </div>);
    }

export default CommonEditComment;