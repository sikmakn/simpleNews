import {SET_HOT_NEWS} from './actions';

const defaultState = {};

const hotNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_HOT_NEWS:
            return {
                value: action.payload
            };
    }

    return state;
};

export default hotNewsReducer;