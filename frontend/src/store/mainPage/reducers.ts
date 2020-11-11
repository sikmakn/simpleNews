import {FETCH_BIG_NEWS, FETCH_LAST_NEWS, FETCH_SMALL_NEWS} from './actions';

const defaultState = {};

const mainPageReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case FETCH_BIG_NEWS:
            return {
                ...state,
                bigNews: action.payload,
            };
        case FETCH_SMALL_NEWS:
            return {
                ...state,
                smallNews: action.payload,
            };
        case FETCH_LAST_NEWS:
            return {
                ...state,
                lastNews: action.payload,
            };
    }

    return state;
};

export default mainPageReducer;