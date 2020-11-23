import {
    ADD_COMMENT,
    ADD_SUB_COMMENT, CLEAN_STATUS_OF_COMMENT,
    EDIT_COMMENT,
    EDIT_SUB_COMMENT, LOADING_COMMENTS_ERROR, LOADING_COMMENTS_STATUS,
    SET_COMMENTS,
} from './actions';

interface CommentsState {
    value?: any[]
}

const defaultState: CommentsState = {};

const commentsReducers = (state = defaultState, {type, payload}: any) => {
    switch (type) {
        case SET_COMMENTS:
            return {
                ...state,
                comments: {value: payload},
            };
        case LOADING_COMMENTS_STATUS:
            return {
                ...state,
                loadingStatus: payload
            };
        case LOADING_COMMENTS_ERROR:
            return {
                ...state,
                loadingError: payload,
            };
        case CLEAN_STATUS_OF_COMMENT:
            return {value: state.value};
        case ADD_COMMENT:
            return {
                ...state,
                value: [payload, ...state.value!]

            };
        case ADD_SUB_COMMENT:
            const commentsCopyForAdd = [...state.value!];
            commentsCopyForAdd.find(c => c.id === payload.commentId)
                .subComments.push(payload);
            return {
                ...state,
                value: commentsCopyForAdd,

            };
        case EDIT_COMMENT:
            return {
                ...state,
                value: state.value!.map(c => c.id === payload.id ?
                    {...payload, subComments: c.subComments} : c)
            };
        case EDIT_SUB_COMMENT:
            const commentsCopyForEdit = [...state.value!];
            const commentCopy = commentsCopyForEdit.find(c => c.id === payload.commentId);
            commentCopy.subComments = commentCopy.subComments
                .map((sc: any) => sc.id === payload.id ? payload : sc);
            return {
                ...state,
                value: commentsCopyForEdit,
            };
    }
    return state;
}

export default commentsReducers;