import {SET_LOADING_SUBCOMMENT_ERROR, SET_LOADING_SUBCOMMENT_STATUS, SET_SUBCOMMENTS} from './actions';
import fetchProcess from '../../types/fetching';

const defaultState: {
    value: { [k: string]: any[] }
    loadingStatuses: { [k: string]: fetchProcess }
    loadingErrors: { [k: string]: string }
} = {
    value: {},
    loadingStatuses: {},
    loadingErrors: {},
};

const subCommentsReducers = (state = defaultState, {type, payload}: any) => {
    switch (type) {
        case SET_SUBCOMMENTS:
            const {[payload.commentId]: err, ...anotherErrors} = state.loadingErrors;
            return {
                ...state,
                loadingErrors: anotherErrors,
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