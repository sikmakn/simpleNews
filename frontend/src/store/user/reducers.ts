import {CLEAR_USER, SET_NEW_USER, SET_USER, UPDATE_USER} from './actions';

const userReducer = (state = {}, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_NEW_USER:
        case SET_USER:
        case UPDATE_USER:
            return {value: action.payload};
        case CLEAR_USER:
            return {};
    }
    return state;
};

export default userReducer;