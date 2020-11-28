import fetchProcess from '../../types/fetching';
import {GET, POST, PUT} from '../../server/actions';
import {createSubCommentPath, getSubCommentsPath, updateSubCommentPath,} from '../../server/paths/subComment';

export const SET_SUB_COMMENTS = 'SET_SUB_COMMENTS';
export const SET_LOADING_SUB_COMMENT_STATUS = 'SET_LOADING_SUB_COMMENT_STATUS';
export const SET_LOADING_SUB_COMMENT_ERROR = 'SET_LOADING_SUB_COMMENT_ERROR';
export const ADD_SUB_COMMENT = 'ADD_SUB_COMMENT';
export const EDIT_SUB_COMMENT = 'EDIT_SUB_COMMENT';
export const SET_CREATING_SUB_COMMENT_STATUS = 'SET_CREATING_SUB_COMMENT_STATUS';
export const SET_CREATING_SUB_COMMENT_ERROR = 'SET_CREATING_SUB_COMMENT_ERROR';
export const SET_UPDATING_SUB_COMMENT_STATUS = 'SET_UPDATING_SUB_COMMENT_STATUS';
export const SET_UPDATING_SUB_COMMENT_ERROR = 'SET_UPDATING_SUB_COMMENT_ERROR';

export const setUpdatingSubCommentStatus =
    (params: { commentId: string, subCommentId: string, status: fetchProcess }) =>
        ({type: SET_UPDATING_SUB_COMMENT_STATUS, payload: params});

export const setUpdatingSubCommentError =
    (params: { commentId: string, subCommentId: string, error: string }) =>
        ({type: SET_UPDATING_SUB_COMMENT_ERROR, payload: params});

export const setCreatingSubCommentStatus = (params: { commentId: string, status: fetchProcess }) =>
    ({type: SET_CREATING_SUB_COMMENT_STATUS, payload: params});

export const setCreatingSubCommentError = (params: { commentId: string, error: string }) =>
    ({type: SET_CREATING_SUB_COMMENT_ERROR, payload: params});

export const setLoadingSubCommentStatus = (params: { commentId: string, status: fetchProcess }) =>
    ({type: SET_LOADING_SUB_COMMENT_STATUS, payload: params});

export const setLoadingSubCommentError = (params: { commentId: string, error: string }) =>
    ({type: SET_LOADING_SUB_COMMENT_ERROR, payload: params});

export const setSubComments = (params: { commentId: string, subComments: any[] }) =>
    ({type: SET_SUB_COMMENTS, payload: params});

export const addSubComment = (subComment: {
    id: string
    author: {
        username: string
        fullName: string
        imgSrc?: string
    }
    answerTo?: {
        username: string
        fullName: string
    }
    text: string
    commentId: string
}) =>
    ({type: ADD_SUB_COMMENT, payload: subComment});


export const editSubComment = (subComment: any) =>
    ({type: EDIT_SUB_COMMENT, payload: subComment});

//async

export const loadSubComments = (commentId: string) => (dispatch: any) => {
    dispatch(setLoadingSubCommentStatus({commentId, status: fetchProcess.loading}));
    GET(getSubCommentsPath(commentId), dispatch)
        .then(res => res.json())
        .then((subComments: any[]) => {
            dispatch(setSubComments({commentId, subComments}));
            dispatch(setLoadingSubCommentStatus({commentId, status: fetchProcess.success}));
        })
        .catch(res => res.json().then(({error}: any) => {
            dispatch(setLoadingSubCommentStatus({commentId, status: fetchProcess.error}));
            dispatch(setLoadingSubCommentError({commentId, error}));
        }));
};

export const createSubComment = (subComment: {
    authorId: string
    answerToId?: string
    text: string
    commentId: string
}) => (dispatch: any) => {
    dispatch(setCreatingSubCommentStatus({
        commentId: subComment.commentId,
        status: fetchProcess.loading,
    }));
    POST(createSubCommentPath(subComment.commentId), subComment, dispatch)
        .then(res => res.json())
        .then(sc => {
            dispatch(setCreatingSubCommentStatus({
                commentId: subComment.commentId,
                status: fetchProcess.success,
            }));
            dispatch(addSubComment(sc));
        })
        .catch(res => res.json().then(({error}: any) => {
            dispatch(setCreatingSubCommentStatus({
                commentId: subComment.commentId,
                status: fetchProcess.error,
            }));
            dispatch(setCreatingSubCommentError({
                commentId: subComment.commentId,
                error
            }));
        }));
};


export const updateSubComment = (subComment: {
    authorUsername: string
    answerToUsername?: string
    text: string
    subCommentId: string
    commentId: string
}) => (dispatch: any) => {
    const {commentId, subCommentId} = subComment;
    dispatch(setUpdatingSubCommentStatus({
        commentId,
        subCommentId,
        status: fetchProcess.success,
    }))
    PUT(updateSubCommentPath(subCommentId), {...subComment, id: subCommentId}, dispatch)
        .then(res => res.json())
        .then(sc => {
            dispatch(setUpdatingSubCommentStatus({
                commentId,
                subCommentId,
                status: fetchProcess.success
            }));
            dispatch(editSubComment(sc));
        })
        .catch(res => res.json().then(({error}: any) => {
            dispatch(setUpdatingSubCommentStatus({commentId, subCommentId, status: fetchProcess.error}));
            dispatch(setUpdatingSubCommentError({commentId, subCommentId, error}));
        }));
}