import {commonReduxServerActionHandler} from '../../server/reduxServerActions';
import fetchProcess from '../../types/fetching';
import {GET, POST, PUT} from '../../server/actions';
import {
    createCommentPath,
    getManyCommentsPath,
    updateCommentPath,
} from '../../server/paths/comment';

export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const LOADING_COMMENTS_STATUS = 'LOADING_COMMENTS_STATUS';
export const LOADING_COMMENTS_ERROR = 'LOADING_COMMENTS_ERROR';
export const CLEAN_STATUS_OF_COMMENT = 'CLEAN_STATUS_OF_COMMENT';
export const SET_CREATING_COMMENT_STATUS = 'SET_CREATING_COMMENT_STATUS';
export const SET_CREATING_ERROR_OF_COMMENT = 'SET_CREATING_ERROR_OF_COMMENT';
export const SET_UPDATING_COMMENT_STATUS = 'SET_UPDATING_COMMENT_STATUS';
export const SET_UPDATING_ERROR_OF_COMMENT = 'SET_UPDATING_ERROR_OF_COMMENT';

export const setUpdatingCommentStatus = (params: { id: string, status: fetchProcess }) =>
    ({type: SET_UPDATING_COMMENT_STATUS, payload: params});

export const setUpdatingErrorOfComment = (params: { id: string, error: string }) =>
    ({type: SET_UPDATING_ERROR_OF_COMMENT, payload: params});

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

export const setComments = (comments: any) =>
    ({type: SET_COMMENTS, payload: comments});

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
    commonReduxServerActionHandler({
        commonAction: POST(createCommentPath(comment.oneNewsId), comment, dispatch),
        dispatch,
        setStatus: setCreatingCommentStatus,
        setSuccessObj: addComment,
        setError: setCreatingErrorOfComment,
    })
    // dispatch(setCreatingCommentStatus(fetchProcess.loading));
    // POST(createCommentPath(comment.oneNewsId), comment, dispatch)
    //     .then(newComment => {
    //         dispatch(setCreatingCommentStatus(fetchProcess.success));
    //         dispatch(addComment(newComment));
    //     })
    //     .catch(res => res.json().then(({error}: any) => {
    //         dispatch(setCreatingCommentStatus(fetchProcess.error));
    //         dispatch(setCreatingErrorOfComment(error));
    //     }));
}

export const loadComments = (oneNewsId: string) => (dispatch: any) => {
    commonReduxServerActionHandler({
        commonAction: GET(getManyCommentsPath(oneNewsId), dispatch),
        dispatch,
        setSuccessObj: setComments,
        setError: setLoadingCommentsError,
        setStatus: setLoadingCommentsStatus,
    });
    // dispatch(setLoadingCommentsStatus(fetchProcess.loading));
    // GET(getManyCommentsPath(oneNewsId), dispatch)
    //     .then(comments => {
    //         dispatch(setLoadingCommentsStatus(fetchProcess.success));
    //         dispatch(setComments(comments));
    //     })
    //     .catch(res => res.json().then(({error}: any) => {
    //         dispatch(setLoadingCommentsStatus(fetchProcess.error));
    //         dispatch(setLoadingCommentsError(error));
    //     }));
};

export const updateComment = (comment: {
    commentId: string
    text: string
    authorUsername: string
    oneNewsId: string
}) => (dispatch: any) => {
    const {commentId: id, ...anotherComment} = comment;
    commonReduxServerActionHandler({
        commonAction:PUT(updateCommentPath(id), {...anotherComment, id}, dispatch),
        dispatch,
        setStatus: status => setUpdatingCommentStatus({id, status}),
        setError: error => setUpdatingErrorOfComment({id, error}),
        setSuccessObj:editComment,
    })
    // dispatch(setUpdatingCommentStatus({id, status: fetchProcess.loading}));
    // PUT(updateCommentPath(id), {...anotherComment, id}, dispatch)
    //     .then(updatingComment => {
    //         dispatch(setUpdatingCommentStatus({id, status: fetchProcess.success}));
    //         dispatch(editComment(updatingComment));
    //     })
    //     .catch(res => res.json().then(({error}: any) => {
    //         dispatch(setUpdatingCommentStatus({id, status: fetchProcess.error}));
    //         dispatch(setUpdatingErrorOfComment({id, error}));
    //     }));
}