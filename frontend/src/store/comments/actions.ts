import fetchProcess from '../../types/fetching';
import {GET} from '../../server/actions';
import {GET_MANY_PATH} from '../../server/paths/comment';

export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_SUB_COMMENT = 'ADD_SUB_COMMENT';
export const EDIT_SUB_COMMENT = 'EDIT_SUB_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const LOADING_COMMENTS_STATUS = 'LOADING_COMMENTS_STATUS';
export const LOADING_COMMENTS_ERROR = 'LOADING_COMMENTS_ERROR';
export const CLEAN_STATUS_OF_COMMENT = 'CLEAN_STATUS_OF_COMMENT';

export const setLoadingCommentsStatus = (status: fetchProcess) =>
    ({type: LOADING_COMMENTS_STATUS, payload: status});

export const setLoadingCommentsError = (error: string) =>
    ({type: LOADING_COMMENTS_ERROR, payload: error});

export const addComment = (comment: {
    id: string
    text: string
    author: {
        username: string
        fullName: string
    }
    oneNewsId: string
    subComments: any[]
}) => ({type: ADD_COMMENT, payload: comment});

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

export const setComments = (comments: any) =>
    ({type: SET_COMMENTS, payload: comments});

export const editSubComment = (subComment: any) =>
    ({type: EDIT_SUB_COMMENT, payload: subComment});

export const editComment = (comment: {
    id: string
    text: string
    author: {
        username: string
        fullName: string
    }
    oneNewsId: string
}) => ({type: EDIT_COMMENT, payload: comment})

//async

export const cleanStatusOfComments = () =>
    (dispatch:any) => dispatch({type:CLEAN_STATUS_OF_COMMENT});

export const createComment = (comment: {
    text: string
    authorUsername: string
    oneNewsId: string
}) => (dispatch: any) =>
    dispatch(addComment({
        id: String(Math.random() * 10),
        text: comment.text,
        oneNewsId: comment.oneNewsId,
        author: {
            username: comment.authorUsername,
            fullName: 'full name',
        },
        subComments: []
    }));

export const loadComments = (oneNewsId: string) => (dispatch: any) => {
    dispatch(setLoadingCommentsStatus(fetchProcess.loading));
    GET(GET_MANY_PATH + oneNewsId)
        .then(res => res.json())
        .then(comments => {
            dispatch(setLoadingCommentsStatus(fetchProcess.success));
            dispatch(setComments(comments));
        })
        .catch(res=> res.json().then(({error}:any)=>{
            dispatch(setLoadingCommentsStatus(fetchProcess.error));
            dispatch(setLoadingCommentsError(error));
        }));
};

export const createSubComment = (subComment: {
    authorUsername: string
    answerToUsername?: string
    text: string
    commentId: string
}) => (dispatch: any) =>
    dispatch(addSubComment({
        id: String(Math.random()),
        answerTo: subComment.answerToUsername ? {
            username: subComment.answerToUsername,
            fullName: "Какой-то челик"
        } : undefined,
        author: {
            fullName: 'Z',
            username: subComment.authorUsername
        },
        text: subComment.text,
        commentId: subComment.commentId,
    }));


export const updateSubComment = (subComment: {
    authorUsername: string
    answerToUsername?: string
    text: string
    subCommentId: string
    commentId: string
}) => (dispatch: any) =>
    dispatch(editSubComment({
        id: subComment.subCommentId,
        answerTo: subComment.answerToUsername ? {
            username: subComment.answerToUsername,
            fullName: "Какой-то челик"
        } : undefined,
        author: {
            fullName: 'Z',
            username: subComment.authorUsername
        },
        text: subComment.text,
        commentId: subComment.commentId
    }));

export const updateComment = (comment: {
    commentId: string
    text: string
    authorUsername: string
    oneNewsId: string
}) => (dispatch: any) =>
    dispatch(editComment({
        id: comment.commentId,
        text: comment.text,
        author: {
            username: comment.authorUsername,
            fullName: 'Keker'
        },
        oneNewsId: comment.oneNewsId
    }));