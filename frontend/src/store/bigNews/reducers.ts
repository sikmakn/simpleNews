import updateLikesInNewsCards from '../../helpers/updateLikesInNewsCards';
import fetchProcess from '../../types/fetching';
import {
    CLEAN_STATUS_OF_BIG_NEWS,
    LIKE_BIG_NEWS,
    SET_LOADED_BIG_NEWS,
    SET_LOADIG_BIG_NEWS_ERRORS,
    SET_LOADING_BIG_NEWS_STATUS
} from './actions';

const defaultState: { value?: any } = {};

const mainPageReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_LOADED_BIG_NEWS:
            return {
                value: action.payload,
                loadingStatus: fetchProcess.success,
            };
        case SET_LOADING_BIG_NEWS_STATUS:
            return {loadingStatus: fetchProcess.loading};
        case SET_LOADIG_BIG_NEWS_ERRORS:
            return {
                loadingStatus: fetchProcess.error,
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