import fetchProcess from '../../types/fetching';
import {GET, POST} from '../../server/actions';
import {CREATE_PATH, GET_MANY_PATH} from '../../server/paths/comment';

export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_SUB_COMMENT = 'ADD_SUB_COMMENT';
export const EDIT_SUB_COMMENT = 'EDIT_SUB_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const LOADING_COMMENTS_STATUS = 'LOADING_COMMENTS_STATUS';
export const LOADING_COMMENTS_ERROR = 'LOADING_COMMENTS_ERROR';
export const CLEAN_STATUS_OF_COMMENT = 'CLEAN_STATUS_OF_COMMENT';
export const SET_CREATING_COMMENT_STATUS = 'SET_CREATING_COMMENT_STATUS';
export const SET_CREATING_ERROR_OF_COMMENT = 'SET_CREATING_ERROR_OF_COMMENT';
export const SET_SUBCOMMENTS = 'SET_SUBCOMMENTS';
export const SET_LOADING_SUBCOMMENT_STATUS = 'SET_LOADING_SUBCOMMENT_STATUS';
export const SET_LOADING_SUBCOMMENT_ERROR = 'SET_LOADING_SUBCOMMENT_ERROR';

export const setLoadingSubCommentStatus = (params: { commentId: string, status: fetchProcess }) =>
    ({type: SET_LOADING_SUBCOMMENT_STATUS, payload: params});

export const setLoadingSubCommentError = (params: { commentId: string, error: string }) =>
    ({type: SET_LOADING_SUBCOMMENT_ERROR, payload: params});

export const setSubComments = (params: { commentId: string, subComments: any[] }) =>
    ({type: SET_SUBCOMMENTS, payload: params});

export const setCreatingCommentStatus = (status: fetchProcess) =>
    ({type: SET_CREATING_COMMENT_STATUS, payload: status});

export const setCreatingErrorOfComment = (error: string) =>
    ({type: SET_CREATING_ERROR_OF_COMMENT, payload: error});

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
    (dispatch: any) => dispatch({type: CLEAN_STATUS_OF_COMMENT});

export const createComment = (comment: {
    text: string
    authorUsername: string
    oneNewsId: string
}) => (dispatch: any) => {
    dispatch(setCreatingCommentStatus(fetchProcess.loading));
    POST(CREATE_PATH + comment.oneNewsId, comment, dispatch)
        .then(res => res.json())
        .then(newComment => {
            dispatch(setCreatingCommentStatus(fetchProcess.success));
            dispatch(addComment({...newComment, subComments: []}));
        })
        .catch(res => res.json().then(({error}: any) => {
            dispatch(setCreatingCommentStatus(fetchProcess.error));
            dispatch(setCreatingErrorOfComment(error));
        }));
}

export const loadComments = (oneNewsId: string) => (dispatch: any) => {
    dispatch(setLoadingCommentsStatus(fetchProcess.loading));
    GET(GET_MANY_PATH + oneNewsId, dispatch)
        .then(res => res.json())
        .then(comments => {
            dispatch(setLoadingCommentsStatus(fetchProcess.success));
            dispatch(setComments(comments));
        })
        .catch(res => res.json().then(({error}: any) => {
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

export const loadSubComments = (id:string)=>(dispatch:any)=>{

};