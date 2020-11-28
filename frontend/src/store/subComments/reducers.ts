import {
    ADD_SUB_COMMENT,
    EDIT_SUB_COMMENT,
    SET_CREATING_SUB_COMMENT_ERROR,
    SET_CREATING_SUB_COMMENT_STATUS,
    SET_LOADING_SUB_COMMENT_ERROR,
    SET_LOADING_SUB_COMMENT_STATUS,
    SET_SUB_COMMENTS,
    SET_UPDATING_SUB_COMMENT_ERROR,
    SET_UPDATING_SUB_COMMENT_STATUS
} from './actions';
import fetchProcess from '../../types/fetching';

const defaultState: {
    value: { [k: string]: any[] }
    loadingStatuses: { [k: string]: fetchProcess }
    loadingErrors: { [k: string]: string }
    creatingStatuses: { [k: string]: fetchProcess }
    creatingErrors: { [k: string]: string }
    updatingStatuses: { [commentId: string]: { [subCommentId: string]: fetchProcess } }
    updatingErrors: { [commentId: string]: { [subCommentId: string]: string } }
} = {
    value: {},
    loadingStatuses: {},
    loadingErrors: {},
    creatingStatuses: {},
    creatingErrors: {},
    updatingStatuses: {},
    updatingErrors: {},
};

const subCommentsReducers = (state = defaultState, {type, payload}: any) => {
    switch (type) {
        case SET_SUB_COMMENTS:
            const {[payload.commentId]: loadingErr, ...anotherErrors} = state.loadingErrors;
            return {
                ...state,
                loadingErrors: anotherErrors,
                value: {...state.value, [payload.commentId]: payload.subComments}
            };
        case SET_LOADING_SUB_COMMENT_STATUS:
            return {
                ...state,
                loadingStatuses: {
                    ...state.loadingStatuses,
                    [payload.commentId]: payload.status,
                },
            };
        case SET_LOADING_SUB_COMMENT_ERROR:
            return {
                ...state,
                loadingErrors: {
                    ...state.loadingErrors,
                    [payload.commentId]: payload.error,
                },
            };
        case SET_CREATING_SUB_COMMENT_STATUS:
            return {
                ...state,
                creatingStatuses: {
                    ...state.creatingStatuses,
                    [payload.commentId]: payload.status,
                },
            };
        case SET_CREATING_SUB_COMMENT_ERROR:
            return {
                ...state,
                creatingErrors: {
                    ...state.creatingErrors,
                    [payload.commentId]: payload.error,
                },
            };
        case ADD_SUB_COMMENT:
            const {[payload.commentId]: creatingErr, ...anotherCreatingErrors} = state.creatingErrors;
            const {[payload.commentId]: creatingStatus, ...anotherCreatingStatuses} = state.creatingStatuses;
            return {
                ...state,
                value: {
                    ...state.value,
                    [payload.commentId]: [
                        ...(state.value[payload.commentId] || []),
                        payload,
                    ],
                },
                creatingErrors: anotherCreatingErrors,
                creatingStatuses: anotherCreatingStatuses,
            };
        case EDIT_SUB_COMMENT:
            return {
                ...state,
                value: {
                    ...state.value,
                    [payload.commentId]: state.value[payload.commentId]
                        .map(sc => sc.id === payload.id ? payload : sc),
                },
            };
        case SET_UPDATING_SUB_COMMENT_STATUS:
            const commentUpdatingStatuses = state.updatingStatuses[payload.commentId] || {};
            return {
                ...state,
                updatingStatuses: {
                    ...state.updatingStatuses,
                    [payload.commentId]: {
                        ...commentUpdatingStatuses,
                        [payload.subCommentId]: payload.status,
                    },
                },
            };
        case SET_UPDATING_SUB_COMMENT_ERROR:
            const commentUpdatingErrors = state.updatingErrors[payload.commentId] || {};
            return {
                ...state,
                updatingErrors: {
                    ...state.updatingErrors,
                    [payload.commentId]: {
                        ...commentUpdatingErrors,
                        [payload.subCommentId]: payload.error,
                    },
                },
            };
        default:
            return state;
    }
};

export default subCommentsReducers;