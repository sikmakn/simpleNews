import fetchProcess from '../../types/fetching';
import {
    SET_CLEAN_SUB_COMMENTS_STATUSES,
    SET_CREATED_SUB_COMMENT,
    SET_CREATING_SUB_COMMENT_ERROR,
    SET_CREATING_SUB_COMMENT_STATUS,
    SET_LOADED_SUB_COMMENTS,
    SET_LOADING_SUB_COMMENT_ERROR,
    SET_LOADING_SUB_COMMENT_STATUS,
    SET_UPDATED_SUB_COMMENT, SET_UPDATING_SUB_COMMENT_ERROR,
    SET_UPDATING_SUB_COMMENT_STATUS
} from './actions';
import {SubCommentsState} from './types/subCommentsState';

const defaultState: SubCommentsState = {
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
        case SET_CLEAN_SUB_COMMENTS_STATUSES:
            return {
                value: state.value,
                loadingStatuses: {},
                loadingErrors: {},
                creatingStatuses: {},
                creatingErrors: {},
                updatingStatuses: {},
                updatingErrors: {},
            };
        case SET_LOADING_SUB_COMMENT_STATUS:
            const {[payload.commentId]: loadingErr, ...anotherErrors} = state.loadingErrors;
            return {
                ...state,
                loadingErrors: anotherErrors,
                loadingStatuses: {...state.loadingStatuses, [payload.commentId]: fetchProcess.loading},
            };
        case SET_LOADED_SUB_COMMENTS:
            return {
                ...state,
                value: {...state.value, [payload.commentId]: payload.subComments},
                loadingStatuses: {...state.loadingStatuses, [payload.commentId]: fetchProcess.success},
                updatingStatuses: {...state.updatingStatuses, [payload.commentId]: {}},
                updatingErrors: {...state.updatingErrors, [payload.commentId]: {}}
            };
        case SET_LOADING_SUB_COMMENT_ERROR:
            return {
                ...state,
                loadingErrors: {...state.loadingErrors, [payload.commentId]: payload.error},
                loadingStatuses: {...state.loadingStatuses, [payload.commentId]: fetchProcess.error},
            };
        case SET_CREATING_SUB_COMMENT_STATUS:
            const {[payload.commentId]: creatingErr, ...anotherCreatingErrors} = state.creatingErrors;
            return {
                ...state,
                creatingErrors: anotherCreatingErrors,
                creatingStatuses: {...state.creatingStatuses, [payload.commentId]: fetchProcess.loading},
            };
        case SET_CREATED_SUB_COMMENT:
            return {
                ...state,
                value: {
                    ...state.value,
                    [payload.commentId]: [
                        ...(state.value[payload.commentId] || []),
                        payload,
                    ],
                },
                creatingStatuses: {...state.creatingStatuses, [payload.commentId]: fetchProcess.success},
                updatingStatuses: {...state.updatingStatuses, [payload.commentId]: {}},
                updatingErrors: {...state.updatingErrors, [payload.commentId]: {}},
            };
        case SET_CREATING_SUB_COMMENT_ERROR:
            return {
                ...state,
                creatingErrors: {...state.creatingErrors, [payload.commentId]: payload.error},
                creatingStatuses: {...state.creatingStatuses, [payload.commentId]: fetchProcess.error},
            };
        case SET_UPDATING_SUB_COMMENT_STATUS:
            const {[payload.subCommentId]: oldErr, ...anotherUpdatingErrors} = state.updatingErrors[payload.commentId] || {};
            return {
                ...state,
                updatingStatuses: {
                    ...state.updatingStatuses,
                    [payload.commentId]: {
                        ...(state.updatingStatuses[payload.commentId] || {}),
                        [payload.subCommentId]: fetchProcess.loading,
                    },
                },
                updatingErrors: {
                    ...state.updatingErrors,
                    [payload.commentId]: {...anotherUpdatingErrors}
                }
            };
        case SET_UPDATED_SUB_COMMENT:
            return {
                ...state,
                value: {
                    ...state.value,
                    [payload.commentId]: state.value[payload.commentId]
                        .map(sc => sc.id === payload.id ? payload : sc),
                },
                updatingStatuses: {
                    ...state.updatingStatuses,
                    [payload.commentId]: {
                        ...(state.updatingStatuses[payload.commentId] || {}),
                        [payload.id]: fetchProcess.success,
                    },
                },
            };
        case SET_UPDATING_SUB_COMMENT_ERROR:
            return {
                ...state,
                updatingStatuses: {
                    ...state.updatingStatuses,
                    [payload.commentId]: {
                        ...(state.updatingStatuses[payload.commentId] || {}),
                        [payload.subCommentId]: fetchProcess.error,
                    },
                },
                updatingErrors: {
                    ...state.updatingErrors,
                    [payload.commentId]: {
                        ...state.updatingErrors[payload.commentId],
                        [payload.subCommentId]: payload.error,
                    },
                },
            };
    }
    return state;
};

export default subCommentsReducers;