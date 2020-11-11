import {SET_BIG_NEWS} from './actions';

const defaultState = {};

const mainPageReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_BIG_NEWS:
            return {
                value: action.payload,
            };
    }

    return state;
};

export default mainPageReducer;