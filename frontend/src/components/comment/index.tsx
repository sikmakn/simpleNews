import React, {useState} from 'react';
import styles from './comment.module.scss';
import HideShowSubCommentsButton from '../hideShowSubCommentsButton';
import AddSubCommentHOC from '../addSubComment/hoc';
import CommonCommentHOC from '../commonComment/hoc';

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

export interface CommentProps extends CommentCommonType {
    subComments: [SubCommentType]
}

const Comment: React.FC<CommentProps> =
    ({subComments, ...comment}) => {
        const [visibleSubComments, setVisibleSubComments] = useState(false);
        const [isAddAnswer, setIsAddAnswer] = useState(false);
        const [answerTo, setAnswerTo] = useState<{ fullName: string, username: string }>();

        const makeAnswer = (to: { fullName: string, username: string }) => {
            setAnswerTo(to);
            setIsAddAnswer(true);
        };

        return (
            <div className={styles.commentContainer}>
                <CommonCommentHOC makeAnswer={makeAnswer} comment={comment}/>
                <div className={styles.subCommentsContainer}>
                    <HideShowSubCommentsButton
                        visible={visibleSubComments}
                        setVisible={setVisibleSubComments}
                    />
                    {
                        visibleSubComments &&
                        subComments.map(sc =>
                            <CommonCommentHOC
                                key={sc.id} subComment
                                makeAnswer={makeAnswer} comment={sc}
                            />)
                    }
                    {
                        isAddAnswer &&
                        <AddSubCommentHOC
                            answerTo={answerTo}
                            commentId={comment.id}
                            hide={() => setIsAddAnswer(false)}
                        />
                    }
                </div>
            </div>
        )
    };

export default Comment;