import {
    CLEAN_ONE_NEWS_STATUS,
    LIKE_ONE_NEWS,
    SET_CREATING_ERROR_OF_ONE_NEWS,
    SET_CREATING_ONE_NEWS_STATUS,
    SET_ERROR_LOADING_OF_ONE_NEWS, SET_ID_OF_ONE_NEWS,
    SET_LOADING_ONE_NEWS_STATUS,
    SET_ONE_NEWS,
    SET_UPDATE_ERROR_OF_ONE_NEWS
} from './actions';
import {updateLikeInOneNews} from '../../helpers/updateLikesInNewsCards';

const defaultState: { id?: string, value?: any } = {};

const oneNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_ID_OF_ONE_NEWS:
            return {
                ...state,
                id: action.payload
            };
        case SET_ONE_NEWS:
            return {
                id: state.id,
                value: action.payload,
            };
        case SET_CREATING_ONE_NEWS_STATUS:
            return {
                ...state,
                creatingStatus: action.payload,
            };
        case SET_CREATING_ERROR_OF_ONE_NEWS:
            return {
                ...state,
                creatingError: action.payload,
            };
        case SET_UPDATE_ERROR_OF_ONE_NEWS:
            return {
                ...state,
                updateError: action.payload,
            };
        case SET_LOADING_ONE_NEWS_STATUS:
            return {
                ...state,
                loadingStatus: action.payload,
            };
        case SET_ERROR_LOADING_OF_ONE_NEWS:
            return {
                ...state,
                loadingError: action.payload,
            };
        case CLEAN_ONE_NEWS_STATUS:
            return {
                value: state.value,
            }
        case LIKE_ONE_NEWS:
            return {
                ...state,
                value: updateLikeInOneNews({value: action.payload, oneNews: {...state.value}})
            };
    }
    return state;
};

export default oneNewsReducer;