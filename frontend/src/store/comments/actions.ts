import {GET, POST, PUT} from '../../server/actions';
import {
    createCommentPath,
    getManyCommentsPath,
    updateCommentPath,
} from '../../server/paths/comment';
import {commonReduxServerActionHandler} from '../../server/reduxServerActions';

export const SET_CREATED_COMMENT = 'SET_CREATED_COMMENT';
export const SET_CREATING_COMMENT_STATUS = 'SET_CREATING_COMMENT_STATUS';
export const SET_CREATING_COMMENT_ERROR = 'SET_CREATING_COMMENT_ERROR';

export const SET_UPDATED_COMMENT = 'SET_UPDATED_COMMENT';
export const SET_UPDATING_COMMENT_STATUS = 'SET_UPDATING_COMMENT_STATUS';
export const SET_UPDATING_COMMENT_ERROR = 'SET_UPDATING_COMMENT_ERROR';

export const SET_LOADED_COMMENTS = 'SET_LOADED_COMMENTS';
export const SET_LOADING_COMMENTS_STATUS = 'SET_LOADING_COMMENTS_STATUS';
export const SET_LOADING_COMMENTS_ERROR = 'SET_LOADING_COMMENTS_ERROR';

export const CLEAN_STATUS_OF_COMMENT = 'CLEAN_STATUS_OF_COMMENT';

export const setUpdatedComment = (comment: Comment) =>
    ({type: SET_UPDATED_COMMENT, payload: comment});

export const setUpdatingCommentStatus = (id: string) =>
    ({type: SET_UPDATING_COMMENT_STATUS, payload: id});

export const setUpdatingCommentError = (params: { id: string, error: string }) =>
    ({type: SET_UPDATING_COMMENT_ERROR, payload: params});


export const setCreatedComment = (comment: Comment) =>
    ({type: SET_CREATED_COMMENT, payload: comment});

export const setCreatingCommentStatus = () =>
    ({type: SET_CREATING_COMMENT_STATUS});

export const setCreatingCommentError = (error: string) =>
    ({type: SET_CREATING_COMMENT_ERROR, payload: error});


export const setLoadedComments = (comments: any) =>
    ({type: SET_LOADED_COMMENTS, payload: comments});

export const setLoadingCommentsStatus = () =>
    ({type: SET_LOADING_COMMENTS_STATUS});

export const setLoadingCommentsError = (error: string) =>
    ({type: SET_LOADING_COMMENTS_ERROR, payload: error});

//async

export const cleanStatusOfComments = () =>
    (dispatch: any) => dispatch({type: CLEAN_STATUS_OF_COMMENT});

export const createComment = (comment: {
    text: string
    authorUsername: string
    oneNewsId: string
}) => (dispatch: any) =>
    commonReduxServerActionHandler({
        commonAction: POST(createCommentPath(comment.oneNewsId), comment, dispatch),
        dispatch,
        setStatus: setCreatingCommentStatus,
        setSuccessObj: setCreatedComment,
        setError: setCreatingCommentError,
    });


export const loadComments = (oneNewsId: string) =>
    (dispatch: any) =>
        commonReduxServerActionHandler({
            commonAction: GET(getManyCommentsPath(oneNewsId), dispatch),
            dispatch,
            setSuccessObj: setLoadedComments,
            setError: setLoadingCommentsError,
            setStatus: setLoadingCommentsStatus,
        });


export const updateComment = ({commentId: id, ...anotherComment}: {
    commentId: string
    text: string
    authorUsername: string
    oneNewsId: string
}) => (dispatch: any) =>
    commonReduxServerActionHandler({
        commonAction: PUT(updateCommentPath(id), {...anotherComment, id}, dispatch),
        dispatch,
        setStatus: () => setUpdatingCommentStatus(id),
        setError: error => setUpdatingCommentError({id, error}),
        setSuccessObj: setUpdatedComment,
    });