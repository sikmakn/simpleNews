import {SET_LAST_NEWS} from './actions';

const defaultState = {};

const lastNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_LAST_NEWS:
            return {value: action.payload};
    }

    return state;
};

export default lastNewsReducer;