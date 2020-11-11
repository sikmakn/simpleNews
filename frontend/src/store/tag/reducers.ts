import {SET_TAG} from './actions';

const defaultState = {};

const tagReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_TAG:
            return {value: action.payload};
    }
    return state;
}

export default tagReducer;