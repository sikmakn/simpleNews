import {
    CLEAN_STATUS_OF_HOT_NEWS,
    LIKE_HOT_NEWS,
    SET_ERROR_OF_HOT_NEWS,
    SET_HOT_NEWS,
    SET_LOADING_HOT_NEWS_STATUS
} from './actions';
import updateLikesInNewsCards from '../../helpers/updateLikesInNewsCards';

const defaultState: { value?: any } = {};

const hotNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_HOT_NEWS:
            return {
                ...state,
                value: action.payload,
            };
        case SET_LOADING_HOT_NEWS_STATUS:
            return {
                ...state,
                loadingStatus: action.payload,
            };
        case SET_ERROR_OF_HOT_NEWS:
            return {
                ...state,
                loadingError: action.payload,
            };
        case CLEAN_STATUS_OF_HOT_NEWS:
            return {value: state.value};
        case LIKE_HOT_NEWS:
            return {
                ...state,
                value: updateLikesInNewsCards(action.payload, state.value),
            };
    }
    return state;
};

export default hotNewsReducer;