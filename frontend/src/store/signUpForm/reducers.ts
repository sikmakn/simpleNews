import {SIGN_UP_FORM_REGISTER_USER} from './actions';

const signUpFormReducer = (state = {}, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SIGN_UP_FORM_REGISTER_USER:
            return {
                ...state,
                user: action.payload
            }
    }
    return state;
};

export default signUpFormReducer;