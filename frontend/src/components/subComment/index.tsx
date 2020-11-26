import React, {useState} from 'react';
import EditSubCommentHOC from '../editSubComment/hoc';
import CommonCommentHOC from '../commonComment/hoc';

export interface SubCommentProps {
    subComment: {
        id: string
        text: string
        commentId: string
        answerTo?: {
            username: string
            fullName: string
        }
        author: {
            username: string
            imgSrc: string
            fullName: string
        }
    }
    makeAnswer: (to: {
        username: string
        fullName: string
    }) => void
}

const SubComment: React.FC<SubCommentProps> =
    ({
         makeAnswer,
         subComment
     }) => {
        const [isEdit, setIsEdit] = useState(false);
        return isEdit ?
            <EditSubCommentHOC
                text={subComment.text}
                commentId={subComment.commentId}
                subCommentId={subComment.id}
                hide={() => setIsEdit(false)}
            /> :
            <CommonCommentHOC
                makeAnswer={makeAnswer}
                edit={() => setIsEdit(true)}
                comment={subComment}
                subComment
            />
    };

export default SubComment;