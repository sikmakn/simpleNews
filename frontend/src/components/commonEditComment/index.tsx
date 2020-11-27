import React, {useEffect, useState} from 'react';
import styles from './commonEditComment.module.scss';
import UserImage from '../userImage';
import ButtonContainer from '../buttonContainer';
import fetchProcess from '../../types/fetching';
import Loader from '../loader';

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
    error?: string
    status?: fetchProcess
    saveComment: (subComment: {
        authorId: string
        answerToId?: string
        text: string
        commentId: string
        subCommentId?: string
        oneNewsId: string
    }) => void
    oneNewsId: string
}

const CommonEditComment: React.FC<CommonEditCommentProps> =
    ({
         user,
         answerTo,
         commentId,
         hide,
         saveComment,
         text: defaultText,
         subCommentId,
         error,
         status,
         oneNewsId,
     }) => {
        const [text, setText] = useState(defaultText || '');
        useEffect(() => {
            if (status === fetchProcess.success)
                hide();
        }, [status, hide]);
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
                    {error}
                    {status === fetchProcess.loading && <Loader size={30}/>}
                    <ButtonContainer
                        addButtonName="Сохранить"
                        onClickToAdd={() => {
                            saveComment({
                                subCommentId,
                                text,
                                commentId,
                                authorId: user.username,
                                answerToId: answerTo?.username,
                                oneNewsId,
                            });
                        }}
                        onClickToCancel={hide}
                    />
                </div>
            </div>);
    }

export default CommonEditComment;