import fetchProcess from '../../types/fetching';
import {
    CLEAN_STATUS_OF_LAST_NEWS,
    SET_LOADED_LAST_NEWS,
    SET_LOADING_LAST_NEWS_ERROR,
    SET_LOADING_LAST_NEWS_STATUS
} from './actions';

const defaultState = {};

const lastNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_LOADED_LAST_NEWS:
            return {
                loadingStatus: fetchProcess.success,
                value: action.payload,
            };
        case SET_LOADING_LAST_NEWS_STATUS:
            return {loadingStatus: fetchProcess.loading};
        case SET_LOADING_LAST_NEWS_ERROR:
            return {
                loadingStatus: fetchProcess.error,
                loadingError: action.payload,
            };
        case CLEAN_STATUS_OF_LAST_NEWS:
            return {};
    }
    return state;
};

export default lastNewsReducer;