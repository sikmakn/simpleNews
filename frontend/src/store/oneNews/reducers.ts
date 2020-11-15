import {ADD_ONE_NEWS, EDIT_ONE_NEWS, LIKE_ONE_NEWS, SET_ONE_NEWS} from './actions';

const defaultState: { value?: any } = {};

const oneNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_ONE_NEWS:
            return {value: action.payload};
        case EDIT_ONE_NEWS:
            return {value: action.payload};
        case ADD_ONE_NEWS:
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