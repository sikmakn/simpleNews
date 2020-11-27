import React, {useEffect} from 'react';
import styles from './subCommentsContainer.module.scss';
import SubComment from '../subComment';
import {CommentCommonType} from '../fullComment';
import fetchProcess from '../../types/fetching';
import Loader from '../loader';

interface SubCommentType extends CommentCommonType {
    answerTo: {
        username: string
        firstName: string
        lastName: string
    }
    commentId: string
}

export interface SubCommentsContainerProps {
    loadSubComments: (commentId: string) => void
    commentId: string
    subComments?: SubCommentType[]
    makeSubCommentAnswer: (to: {
        username: string
        firstName: string
        lastName: string
    }) => void
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
         error,
     }) => {
        useEffect(() => {
            if (!subComments)
                loadSubComments(commentId);
        }, [subComments, commentId, loadSubComments]);
        return (<div className={styles.subCommentsContainer}>
            {error}
            {status === fetchProcess.loading && <Loader size={50}/>}
            {subComments?.map(sc =>
                <SubComment
                    key={sc.id} subComment={sc}
                    makeAnswer={makeSubCommentAnswer}
                />)}
        </div>);
    };

export default SubCommentsContainer;