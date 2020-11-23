import {
    CLEAN_STATUS_OF_BIG_NEWS,
    LIKE_BIG_NEWS,
    SET_LOADING_BIG_NEWS_STATUS,
    SET_BIG_NEWS,
    SET_ERROR_OF_BIG_NEWS
} from './actions';
import updateLikesInNewsCards from '../../helpers/updateLikesInNewsCards';

const defaultState: { value?: any } = {};

const mainPageReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_BIG_NEWS:
            return {
                ...state,
                value: action.payload,
            };
        case SET_LOADING_BIG_NEWS_STATUS:
            return {
                ...state,
                loadingStatus: action.payload,
            };
        case SET_ERROR_OF_BIG_NEWS:
            return {
                ...state,
                loadingError: action.payload,
            };
        case CLEAN_STATUS_OF_BIG_NEWS:
            return {value: state.value};
        case LIKE_BIG_NEWS:
            return {
                ...state,
                value: updateLikesInNewsCards(action.payload, state.value),
            };
    }
    return state;
};

export default mainPageReducer;