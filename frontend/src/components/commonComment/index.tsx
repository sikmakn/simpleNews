import React from 'react';
import styles from './commonComment.module.scss';
import UserImage from '../userImage';

export interface CommonCommentProps {
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
    subComment?: boolean
}

const CommonComment: React.FC<CommonCommentProps> =
    ({comment: {text, author: {img, fullName}, answerTo}, subComment = false}) =>
        (<div className={styles.commentContainer}>
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
                <span className={styles.answer}>Ответить</span>
                {/*todo if user comment change to 'Edit'*/}
                {/*todo edit*/}
            </div>
        </div>);

export default CommonComment;