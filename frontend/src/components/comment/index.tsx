import React, {useState} from 'react';
import styles from './comment.module.scss';
import CommonComment from '../commonComment';
import HideShowSubCommentsButton from "../hideShowSubCommentsButton";

interface CommentCommonType {
    id: string
    text: string
    user: {
        id: string
        img: string
        fullName: string
    }
}

interface SubCommentType extends CommentCommonType {
    answerTo: {
        id: string,
        fullName: string
    }
}

export interface CommentProps extends CommentCommonType {
    subComments: [SubCommentType]
}

const Comment: React.FC<CommentProps> =
    ({subComments, ...comment}) => {
        const [visibleSubComments, setVisibleSubComments] = useState(false);
        return (
            <div className={styles.commentContainer}>
                <CommonComment comment={comment}/>
                <div className={styles.subCommentsContainer}>
                    <HideShowSubCommentsButton
                        visible={visibleSubComments}
                        setVisible={setVisibleSubComments}
                    />
                    {
                        visibleSubComments &&
                        subComments.map(sc => <CommonComment comment={sc} subComment/>)
                    }
                </div>
            </div>
        )
    };

export default Comment;