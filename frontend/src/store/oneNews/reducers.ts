import {updateLikeInOneNews} from '../../helpers/updateLikesInNewsCards';
import fetchProcess from '../../types/fetching';
import {OneNewsFull} from './types/oneNews';
import {
    CLEAN_ONE_NEWS_STATUS,
    LIKE_ONE_NEWS,
    SET_CREATED_ONE_NEWS,
    SET_CREATING_ONE_NEWS_ERROR,
    SET_CREATING_ONE_NEWS_STATUS,
    SET_ID_OF_ONE_NEWS,
    SET_LOADED_ONE_NEWS,
    SET_LOADING_ONE_NEWS_ERROR,
    SET_LOADING_ONE_NEWS_STATUS,
    SET_UPDATED_ONE_NEWS,
    SET_UPDATING_ONE_NEWS_ERROR,
    SET_UPDATING_ONE_NEWS_STATUS
} from './actions';

const defaultState: { id?: string, value?: OneNewsFull } = {};

const oneNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_ID_OF_ONE_NEWS:
            return {
                ...state,
                id: action.payload
            };
        case SET_CREATING_ONE_NEWS_STATUS:
            return {
                ...state,
                creatingStatus: fetchProcess.loading,
            };
        case SET_CREATED_ONE_NEWS:
            return {
                ...state,
                id: action.payload,
                creatingStatus: fetchProcess.success
            };
        case SET_CREATING_ONE_NEWS_ERROR:
            return {
                ...state,
                creatingError: action.payload,
                creatingStatus: fetchProcess.error,
            };
        case SET_UPDATING_ONE_NEWS_ERROR:
            return {
                ...state,
                updateError: action.payload,
                updatingStatus: fetchProcess.error,
            };
        case SET_UPDATING_ONE_NEWS_STATUS:
            return {
                ...state,
                updatingStatus: fetchProcess.loading,
            };
        case SET_UPDATED_ONE_NEWS:
            return {
                ...state,
                value: action.payload,
                updatingStatus: fetchProcess.success,
            };
        case SET_LOADING_ONE_NEWS_STATUS:
            return {
                ...state,
                loadingStatus: fetchProcess.loading,
            };
        case SET_LOADED_ONE_NEWS:
            return {
                ...state,
                loadingStatus: fetchProcess.success,
                value: action.payload,
            };
        case SET_LOADING_ONE_NEWS_ERROR:
            return {
                ...state,
                loadingStatus: fetchProcess.error,
                loadingError: action.payload,
            };
        case CLEAN_ONE_NEWS_STATUS:
            return {value:state.value};
        case LIKE_ONE_NEWS:
            return {
                ...state,
                value: updateLikeInOneNews({value: action.payload, oneNews: {...state.value}})
            };
    }
    return state;
};

export default oneNewsReducer;