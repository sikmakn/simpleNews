import {SET_LOADING_SUBCOMMENT_ERROR, SET_LOADING_SUBCOMMENT_STATUS, SET_SUBCOMMENTS} from './actions';

const defaultState = {
    value: {},
    loadingStatuses: {},
    loadingErrors: {},
};

const subCommentsReducers = (state = defaultState, {type, payload}: any) => {
    switch (type) {
        case SET_SUBCOMMENTS:
            return {
                ...state,
                value: {...state.value, [payload.commentId]: payload.subComments}
            };
        case SET_LOADING_SUBCOMMENT_STATUS:
            return {
                ...state,
                loadingStatuses: {
                    ...state.loadingStatuses,
                    [payload.commentId]: payload.status,
                },
            };
        case SET_LOADING_SUBCOMMENT_ERROR:
            return {
                ...state,
                loadingErrors: {
                    ...state.loadingErrors,
                    [payload.commentId]: payload.error,
                },
            };
        default:
            return state;
    }
};

export default subCommentsReducers;