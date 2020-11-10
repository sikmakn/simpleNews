import {MAIN_PAGE_FETCH_BIG_NEWS, MAIN_PAGE_FETCH_LAST_NEWS, MAIN_PAGE_FETCH_SMALL_NEWS} from './actions';

const defaultState = {};

const mainPageReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case MAIN_PAGE_FETCH_BIG_NEWS:
            return {
                ...state,
                bigNews: action.payload,
            };
        case MAIN_PAGE_FETCH_SMALL_NEWS:
            return {
                ...state,
                smallNews: action.payload,
            };
        case MAIN_PAGE_FETCH_LAST_NEWS:
            return {
                ...state,
                lastNews: action.payload,
            };
    }

    return state;
};

export default mainPageReducer;