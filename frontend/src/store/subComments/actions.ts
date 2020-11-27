import fetchProcess from '../../types/fetching';
import {ADD_SUB_COMMENT, EDIT_SUB_COMMENT} from '../comments/actions';
import {GET} from "../../server/actions";
import {GET_BY_COMMENT_ID_PATH} from "../../server/paths/subComment";

export const SET_SUBCOMMENTS = 'SET_SUBCOMMENTS';
export const SET_LOADING_SUBCOMMENT_STATUS = 'SET_LOADING_SUBCOMMENT_STATUS';
export const SET_LOADING_SUBCOMMENT_ERROR = 'SET_LOADING_SUBCOMMENT_ERROR';

export const setLoadingSubCommentStatus = (params: { commentId: string, status: fetchProcess }) =>
    ({type: SET_LOADING_SUBCOMMENT_STATUS, payload: params});

export const setLoadingSubCommentError = (params: { commentId: string, error: string }) =>
    ({type: SET_LOADING_SUBCOMMENT_ERROR, payload: params});

export const setSubComments = (params: { commentId: string, subComments: any[] }) =>
    ({type: SET_SUBCOMMENTS, payload: params});

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
    GET(GET_BY_COMMENT_ID_PATH + commentId, dispatch)
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