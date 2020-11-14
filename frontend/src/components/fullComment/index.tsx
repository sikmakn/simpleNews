import React, {useState} from 'react';
import styles from './fullComment.module.scss';
import HideShowSubCommentsButton from '../hideShowSubCommentsButton';
import AddSubCommentHOC from '../addSubComment/hoc';
import SubComment from '../subComment';
import Comment from '../comment';

interface CommentCommonType {
    id: string
    text: string
    author: {
        username: string
        img: string
        fullName: string
    }
}

interface SubCommentType extends CommentCommonType {
    answerTo: {
        username: string,
        fullName: string
    }
}

export interface FullCommentProps extends CommentCommonType {
    subComments: [SubCommentType]
}

const FullComment: React.FC<FullCommentProps> =
    ({subComments, ...comment}) => {
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
                    {
                        visibleSubComments &&
                        subComments.map(sc =>
                            <SubComment
                                key={sc.id}
                                commentId={comment.id}
                                makeAnswer={makeSubCommentAnswer} subComment={sc}
                            />)
                    }
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