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
            firstName: string
            lastName: string
        }
        author: {
            username: string
            img?: string
            firstName: string
            lastName: string
        }
    }
    makeAnswer: (to: {
        username: string
        firstName: string
        lastName: string
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
             author: {img, firstName, lastName, username},
             answerTo
         },
         user,
         makeAnswer,
         subComment = false
     }) => (<div className={styles.commentContainer}>
        <UserImage src={img} size={subComment ? 36 : 70}/>
        <div>
            <span className={styles.username}>{`${firstName} ${lastName}`}</span>
            <div className={styles.commentText}>
                {answerTo &&
                <span className={styles.answerReference}>
                            @{`${answerTo.firstName} ${answerTo.lastName}`}&nbsp;
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
                            onClick={makeAnswer.bind(null, {firstName, lastName, username})}
                        >Ответить</span>
                )
            }
        </div>
    </div>);


export default CommonComment;