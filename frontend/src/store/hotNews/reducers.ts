import updateLikesInNewsCards from '../../helpers/updateLikesInNewsCards';
import fetchProcess from '../../types/fetching';
import {
    CLEAN_STATUS_OF_HOT_NEWS,
    LIKE_HOT_NEWS,
    SET_LOADED_HOT_NEWS,
    SET_LOADING_HOT_NEWS_ERROR,
    SET_LOADING_HOT_NEWS_STATUS
} from './actions';

const defaultState: { value?: any } = {};

const hotNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_LOADED_HOT_NEWS:
            return {
                value: action.payload,
                loadingStatus: fetchProcess.success,
            };
        case SET_LOADING_HOT_NEWS_STATUS:
            return {loadingStatus: fetchProcess.loading};
        case SET_LOADING_HOT_NEWS_ERROR:
            return {
                loadingStatus: fetchProcess.error,
                loadingError: action.payload,
            };
        case CLEAN_STATUS_OF_HOT_NEWS:
            return {};
        case LIKE_HOT_NEWS:
            return {
                ...state,
                value: updateLikesInNewsCards(action.payload, state.value),
            };
    }
    return state;
};

export default hotNewsReducer;