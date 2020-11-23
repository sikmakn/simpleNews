import {
    CLEAN_STATUS_OF_LAST_NEWS,
    SET_LOADING_LAST_NEWS_STATUS,
    SET_ERROR_OF_LAST_NEWS,
    SET_LAST_NEWS
} from './actions';

const defaultState = {};

const lastNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_LAST_NEWS:
            return {
                ...state,
                value: action.payload,
            };
        case SET_LOADING_LAST_NEWS_STATUS:
            return {
                ...state,
                loadingStatus: action.payload,
            };
        case SET_ERROR_OF_LAST_NEWS:
            return {
                ...state,
                loadingError: action.payload,
            };
        case CLEAN_STATUS_OF_LAST_NEWS:
            return {value: action.payload};
    }
    return state;
};

export default lastNewsReducer;