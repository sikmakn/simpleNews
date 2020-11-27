import {
    ADD_COMMENT,
    CLEAN_STATUS_OF_COMMENT,
    EDIT_COMMENT,
    LOADING_COMMENTS_ERROR,
    LOADING_COMMENTS_STATUS,
    SET_COMMENTS,
    SET_CREATING_COMMENT_STATUS,
    SET_CREATING_ERROR_OF_COMMENT,
    SET_UPDATING_COMMENT_STATUS,
    SET_UPDATING_ERROR_OF_COMMENT,
} from './actions';
import fetchProcess from '../../types/fetching';

interface CommentsState {
    value?: any[]
    creatingStatus?: fetchProcess
    creatingError?: string
    loadingStatus?: fetchProcess
    loadingError?: string
    updatingStatuses: { [k: string]: fetchProcess }
    updatingErrors: { [k: string]: string }
}

const defaultState: CommentsState = {
    updatingStatuses: {},
    updatingErrors: {}
};

const commentsReducers = (state = defaultState, {type, payload}: any) => {
    switch (type) {
        case SET_CREATING_COMMENT_STATUS:
            return {
                ...state,
                creatingStatus: payload,
                creatingError: payload === fetchProcess.success ? undefined : state.creatingError,
            };
        case SET_CREATING_ERROR_OF_COMMENT:
            return {
                ...state,
                creatingError: payload,
            };
        case SET_COMMENTS:
            return {
                ...state,
                value: payload,
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
            return {
                value: state.value,
                updatingStatuses: {},
                updatingErrors: {},
            };
        case ADD_COMMENT:
            return {
                ...state,
                value: [payload, ...state.value!]
            };
        case EDIT_COMMENT:
            const {[payload.id]: err, ...anotherErrors} = state.updatingErrors;
            return {
                ...state,
                value: state.value!.map(c => c.id === payload.id ?
                    {...payload, subComments: c.subComments} : c),
                updatingErrors: anotherErrors,
            };
        case SET_UPDATING_COMMENT_STATUS:
            return {
                ...state,
                updatingStatuses: {
                    ...state.updatingStatuses,
                    [payload.id]: payload.status,
                }
            };
        case SET_UPDATING_ERROR_OF_COMMENT:
            return {
                ...state,
                updatingErrors: {
                    ...state.updatingErrors,
                    [payload.id]: payload.error,
                },
            };
    }
    return state;
}

export default commentsReducers;