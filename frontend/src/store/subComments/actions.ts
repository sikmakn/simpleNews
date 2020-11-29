import {GET, POST, PUT} from '../../server/actions';
import {createSubCommentPath, getSubCommentsPath, updateSubCommentPath,} from '../../server/paths/subComment';
import {commonReduxServerActionHandler} from '../../server/reduxServerActions';
import {SubComment} from './types/subComment';

export const SET_LOADED_SUB_COMMENTS = 'SET_LOADED_SUB_COMMENTS';
export const SET_LOADING_SUB_COMMENT_STATUS = 'SET_LOADING_SUB_COMMENT_STATUS';
export const SET_LOADING_SUB_COMMENT_ERROR = 'SET_LOADING_SUB_COMMENT_ERROR';

export const SET_CREATED_SUB_COMMENT = 'SET_CREATED_SUB_COMMENT';
export const SET_CREATING_SUB_COMMENT_STATUS = 'SET_CREATING_SUB_COMMENT_STATUS';
export const SET_CREATING_SUB_COMMENT_ERROR = 'SET_CREATING_SUB_COMMENT_ERROR';

export const SET_UPDATED_SUB_COMMENT = 'EDIT_SUB_COMMENT';
export const SET_UPDATING_SUB_COMMENT_STATUS = 'SET_UPDATING_SUB_COMMENT_STATUS';
export const SET_UPDATING_SUB_COMMENT_ERROR = 'SET_UPDATING_SUB_COMMENT_ERROR';

export const SET_CLEAN_SUB_COMMENTS_STATUSES = 'SET_CLEAN_SUB_COMMENT_STATUS';

export const cleanSubCommentsStatuses = () => ({type: SET_CLEAN_SUB_COMMENTS_STATUSES});

export const setUpdatingSubCommentStatus =
    (params: { commentId: string, subCommentId: string }) =>
        ({type: SET_UPDATING_SUB_COMMENT_STATUS, payload: params});

export const setUpdatingSubCommentError =
    (params: { commentId: string, subCommentId: string, error: string }) =>
        ({type: SET_UPDATING_SUB_COMMENT_ERROR, payload: params});


export const setCreatedSubComment = (subComment: SubComment) =>
    ({type: SET_CREATED_SUB_COMMENT, payload: subComment});

export const setCreatingSubCommentStatus = (params: { commentId: string }) =>
    ({type: SET_CREATING_SUB_COMMENT_STATUS, payload: params});

export const setCreatingSubCommentError = (params: { commentId: string, error: string }) =>
    ({type: SET_CREATING_SUB_COMMENT_ERROR, payload: params});


export const setLoadingSubCommentStatus = (params: { commentId: string }) =>
    ({type: SET_LOADING_SUB_COMMENT_STATUS, payload: params});

export const setLoadingSubCommentError = (params: { commentId: string, error: string }) =>
    ({type: SET_LOADING_SUB_COMMENT_ERROR, payload: params});

export const setLoadedSubComments = (params: { commentId: string, subComments: SubComment[] }) =>
    ({type: SET_LOADED_SUB_COMMENTS, payload: params});


export const setUpdatedSubComment = (subComment: SubComment) =>
    ({type: SET_UPDATED_SUB_COMMENT, payload: subComment});

//async

export const loadSubComments = (commentId: string) => (dispatch: any) =>
    commonReduxServerActionHandler({
        commonAction: GET(getSubCommentsPath(commentId), dispatch),
        dispatch,
        setStatus: () => setLoadingSubCommentStatus({commentId}),
        setError: (error: string) => setLoadingSubCommentError({commentId, error}),
        setSuccessObj: (subComments: any) => setLoadedSubComments({commentId, subComments})
    });

export const createSubComment = (subComment: {
    authorId: string
    answerToId?: string
    text: string
    commentId: string
}) => (dispatch: any) => {
    const {commentId} = subComment;
    commonReduxServerActionHandler({
        commonAction: POST(createSubCommentPath(subComment.commentId), subComment, dispatch),
        setSuccessObj: setCreatedSubComment,
        dispatch,
        setStatus: () => setCreatingSubCommentStatus({commentId}),
        setError: error => setCreatingSubCommentError({commentId, error})
    });
};

export const updateSubComment = (subComment: {
    authorUsername: string
    answerToUsername?: string
    text: string
    subCommentId: string
    commentId: string
}) => (dispatch: any) => {
    const {commentId, subCommentId} = subComment;
    commonReduxServerActionHandler({
        commonAction: PUT(updateSubCommentPath(subCommentId), {...subComment, id: subCommentId}, dispatch),
        dispatch,
        setSuccessObj: setUpdatedSubComment,
        setStatus: () => setUpdatingSubCommentStatus({commentId, subCommentId}),
        setError: error => dispatch(setUpdatingSubCommentError({commentId, subCommentId, error}))
    });
};