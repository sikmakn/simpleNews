import React, {useState} from 'react';
import styles from './fullComment.module.scss';
import HideShowSubCommentsButton from '../hideShowSubCommentsButton';
import AddSubCommentHOC from '../addSubComment/hoc';
import Comment from '../comment';
import SubCommentContainerHOC from '../subCommentsContainer/hoc';

export interface CommentCommonType {
    id: string
    text: string
    author: {
        username: string
        imgSrc: string
        firstName: string
        lastName: string
    }
}

export interface FullCommentProps extends CommentCommonType {
}

const FullComment: React.FC<FullCommentProps> =
    (comment) => {
        const [visibleSubComments, setVisibleSubComments] = useState(false);
        const [isAddAnswer, setIsAddAnswer] = useState(false);
        const [answerTo, setAnswerTo] = useState<{ fullName: string, username: string }>();

        const makeSubCommentAnswer = (to: { fullName: string, username: string }) => {
            setAnswerTo(to);
            setIsAddAnswer(true);
        };

        return (
            <div className={styles.commentContainer}>
                <Comment makeAnswer={() => setIsAddAnswer(true)} comment={comment}/>
                <div className={styles.subCommentsContainer}>

                    <HideShowSubCommentsButton
                        visible={visibleSubComments}
                        setVisible={setVisibleSubComments}
                    />
                    {visibleSubComments && <SubCommentContainerHOC
                        makeSubCommentAnswer={makeSubCommentAnswer}
                        commentId={comment.id}
                    />}
                    {
                        isAddAnswer &&
                        <AddSubCommentHOC
                            answerTo={answerTo}
                            commentId={comment.id}
                            hide={() => {
                                setAnswerTo(undefined);
                                setIsAddAnswer(false)
                            }}
                        />
                    }
                </div>
            </div>
        )
    };

export default FullComment;