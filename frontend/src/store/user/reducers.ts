import {REGISTER_USER, SET_USER} from './actions';

const userReducer = (state = {}, action: { type: string, payload: any }) => {
    console.log(state)
    switch (action.type) {
        case REGISTER_USER:
        case SET_USER:
            return action.payload;
    }
    return state;
};

export default userReducer;