import {
    LIKE_ONE_NEWS,
    SET_CREATING_ONE_NEWS_STATUS,
    SET_ERROR_LOADING_OF_ONE_NEWS,
    SET_UPDATE_ERROR_OF_ONE_NEWS,
    SET_LOADING_ONE_NEWS_STATUS,
    SET_ONE_NEWS,
    SET_CREATING_ERROR_OF_ONE_NEWS
} from './actions';

const defaultState: { value?: any } = {};

const oneNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_ONE_NEWS:
            return {value: action.payload};
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
        case LIKE_ONE_NEWS:
            return {
                value: {
                    ...state.value,
                    userStatistic: {
                        ...state.value.userStatistic,
                        isLiked: action.payload.value
                    }
                }
            };
    }
    return state;
};

export default oneNewsReducer;