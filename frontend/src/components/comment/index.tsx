import React, {useState} from 'react';
import CommonCommentHOC from '../commonComment/hoc';
import EditCommentHOC from '../editComment/hoc';

export interface CommentProps {
    comment: {
        id: string
        text: string
        answerTo?: {
            username: string
            fullName: string
        }
        author: {
            username: string
            imgSrc?: string
            fullName: string
        }
    }
    makeAnswer: (to: {
        username: string
        fullName: string
    }) => void
}

const Comment: React.FC<CommentProps> =
    ({
         makeAnswer,
         comment
     }) => {
        const [isEdit, setIsEdit] = useState(false);
        return isEdit ?
            <EditCommentHOC
                text={comment.text}
                commentId={comment.id}
                hide={() => setIsEdit(false)}
            /> :
            <CommonCommentHOC
                makeAnswer={makeAnswer}
                edit={() => setIsEdit(true)}
                comment={comment}
                subComment
            />
    };

export default Comment;