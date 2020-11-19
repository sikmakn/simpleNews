import {
    EDIT_ONE_NEWS,
    LIKE_ONE_NEWS,
    SET_CREATING_ONE_NEWS_STATUS,
    SET_ERROR_OF_ONE_NEWS,
    SET_ONE_NEWS
} from './actions';

const defaultState: { value?: any } = {};

const oneNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_ONE_NEWS:
            return {value: action.payload};
        case SET_CREATING_ONE_NEWS_STATUS:
            return {
                ...state,
                status: action.payload,
            };
        case SET_ERROR_OF_ONE_NEWS:
            return {
                ...state,
                error: action.payload,
            };
        case EDIT_ONE_NEWS:
            return {value: action.payload};
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