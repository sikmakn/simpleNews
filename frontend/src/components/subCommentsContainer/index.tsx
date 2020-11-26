import React, {useEffect} from 'react';
import SubComment from '../subComment';
import {CommentCommonType} from '../fullComment';

interface SubCommentType extends CommentCommonType {
    answerTo: {
        username: string,
        fullName: string
    }
    commentId: string
}

export interface SubCommentsContainerProps {
    loadSubComments: (commentId: string) => void
    commentId: string
    subComments?: SubCommentType[]
    makeSubCommentAnswer: (to: { username: string, fullName: string }) => void
}

const SubCommentsContainer: React.FC<SubCommentsContainerProps> =
    ({
         subComments,
         makeSubCommentAnswer,
         loadSubComments,
         commentId
     }) => {
        useEffect(() => {
            if (!subComments)
                loadSubComments(commentId);
        }, [subComments, commentId, loadSubComments]);

        return (<>
            {
                subComments?.map(sc =>
                    <SubComment
                        key={sc.id}
                        makeAnswer={makeSubCommentAnswer} subComment={sc}
                    />)
            }
        </>);
    };

export default SubCommentsContainer;