import React from 'react';
import styles from './commonComment.module.scss';
import UserImage from '../userImage';

export interface CommonCommentProps {
    edit: () => void
    comment: {
        id: string
        text: string
        answerTo?: {
            username: string
            fullName: string
        }
        author: {
            username: string
            img: string
            fullName: string
        }
    }
    makeAnswer: (to: {
        username: string
        fullName: string
    }) => void
    user?: {
        username: string
    }
    subComment?: boolean
}

const CommonComment: React.FC<CommonCommentProps> =
    ({
         edit,
         comment: {
             text,
             author: {img, fullName, username},
             answerTo
         },
         user,
         makeAnswer,
         subComment = false
     }) => (<div className={styles.commentContainer}>
        <UserImage src={img} size={subComment ? 36 : 70}/>
        <div>
            <span className={styles.username}>{fullName}</span>
            <div className={styles.commentText}>
                {answerTo &&
                <span className={styles.answerReference}>
                            @{answerTo.fullName}&nbsp;
                        </span>}
                {text}
            </div>
            {
                user &&
                (user.username === username ?
                        <span
                            className={styles.answer}
                            onClick={edit}
                        >Редактировать</span> :
                        <span
                            className={styles.answer}
                            onClick={makeAnswer.bind(null, {fullName, username})}
                        >Ответить</span>
                )
            }
        </div>
    </div>);


export default CommonComment;