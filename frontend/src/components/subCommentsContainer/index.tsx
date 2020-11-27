import React, {useEffect} from 'react';
import SubComment from '../subComment';
import {CommentCommonType} from '../fullComment';
import fetchProcess from '../../types/fetching';
import Loader from '../loader';

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
    status?: fetchProcess
    error?: string
}

const SubCommentsContainer: React.FC<SubCommentsContainerProps> =
    ({
         subComments,
         makeSubCommentAnswer,
         loadSubComments,
         commentId,
         status,
         error
     }) => {
        useEffect(() => {
            if (!subComments)
                loadSubComments(commentId);
        }, [subComments, commentId, loadSubComments]);

        return (<>
            {error}
            {status === fetchProcess.loading && <Loader size={50}/>}
            {
                subComments?.map(sc =>
                    <SubComment
                        key={sc.id}
                        makeAnswer={makeSubCommentAnswer} subComment={sc}
                    />)
            }</>);
    };

export default SubCommentsContainer;