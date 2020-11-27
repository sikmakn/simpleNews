import {
    ADD_SUB_COMMENT,
    SET_CREATING_SUB_COMMENT_ERROR,
    SET_CREATING_SUB_COMMENT_STATUS,
    SET_LOADING_SUB_COMMENT_ERROR,
    SET_LOADING_SUB_COMMENT_STATUS,
    SET_SUB_COMMENTS
} from './actions';
import fetchProcess from '../../types/fetching';

const defaultState: {
    value: { [k: string]: any[] }
    loadingStatuses: { [k: string]: fetchProcess }
    loadingErrors: { [k: string]: string }
    creatingStatuses: { [k: string]: fetchProcess }
    creatingErrors: { [k: string]: string }
} = {
    value: {},
    loadingStatuses: {},
    loadingErrors: {},
    creatingStatuses: {},
    creatingErrors: {},
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
                        ...state.value[payload.commentId],
                        payload,
                    ],
                },
                creatingErrors: anotherCreatingErrors,
                creatingStatuses: anotherCreatingStatuses,
            };
        default:
            return state;
    }
};

export default subCommentsReducers;