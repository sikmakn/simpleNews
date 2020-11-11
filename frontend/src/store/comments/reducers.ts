import {SET_COUNT_OF_COMMENTS} from './actions';

const defaultState = {};

const commentsReducers = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_COUNT_OF_COMMENTS:
            return {
                count: {value: action.payload}
            }
    }
    return state;
}

export default commentsReducers;