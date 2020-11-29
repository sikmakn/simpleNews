import fetchProcess from '../../types/fetching';
import {
    CLEAN_STATUS_OF_COMMENT,
    SET_CREATED_COMMENT,
    SET_CREATING_COMMENT_ERROR,
    SET_CREATING_COMMENT_STATUS,
    SET_LOADED_COMMENTS,
    SET_LOADING_COMMENTS_ERROR,
    SET_LOADING_COMMENTS_STATUS,
    SET_UPDATED_COMMENT,
    SET_UPDATING_COMMENT_ERROR,
    SET_UPDATING_COMMENT_STATUS,
} from './actions';
import {OmmentsState} from './types/сommentsState';

const defaultState: OmmentsState = {
    updatingStatuses: {},
    updatingErrors: {}
};

const commentsReducers = (state = defaultState, {type, payload}: any) => {
    switch (type) {
        case SET_CREATING_COMMENT_STATUS:
            return {
                ...state,
                creatingStatus: fetchProcess.loading,
                creatingError: undefined,
            };
        case SET_CREATED_COMMENT:
            return {
                ...state,
                value: [payload, ...state.value!],
                creatingStatus: fetchProcess.success,
            };
        case SET_CREATING_COMMENT_ERROR:
            return {
                ...state,
                creatingError: payload,
                creatingStatus: fetchProcess.error,
            };
        case SET_LOADING_COMMENTS_STATUS:
            return {
                ...state,
                loadingStatus: fetchProcess.loading,
                loadingError: undefined,
            };
        case SET_LOADED_COMMENTS:
            return {
                ...state,
                value: payload,
                loadingStatus: fetchProcess.success,
            };
        case SET_LOADING_COMMENTS_ERROR:
            return {
                ...state,
                loadingError: payload,
                loadingStatus: fetchProcess.error,
            };
        case SET_UPDATED_COMMENT:
            const {[payload.id]: err, ...anotherErrors} = state.updatingErrors;
            return {
                ...state,
                value: state.value!.map(c => c.id === payload.id ? payload : c),
                updatingStatuses: setUpdatingStatus(payload.id, state, fetchProcess.success),
                updatingErrors: anotherErrors,
            };
        case SET_UPDATING_COMMENT_STATUS:
            return {
                ...state,
                updatingStatuses: setUpdatingStatus(payload.id, state, fetchProcess.loading)
            };
        case SET_UPDATING_COMMENT_ERROR:
            return {
                ...state,
                updatingErrors: {
                    ...state.updatingErrors,
                    [payload.id]: payload.error,
                },
                updatingStatuses: setUpdatingStatus(payload.id, state, fetchProcess.error)
            };
        case CLEAN_STATUS_OF_COMMENT:
            return {
                value: state.value,
                updatingStatuses: {},
                updatingErrors: {},
            };
    }
    return state;
}

export default commentsReducers;

function setUpdatingStatus(id: string, state: OmmentsState, status: fetchProcess) {
    return {
        ...state.updatingStatuses,
        [id]: status,
    };
}