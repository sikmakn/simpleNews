import {SET_ONE_NEWS} from './actions';

const defaultState = {};

const oneNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_ONE_NEWS:
            return action.payload;
    }

    return state;
};

export default oneNewsReducer;