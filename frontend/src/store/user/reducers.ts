import {
    CLEAR_USER,
    SET_NEW_USER,
    SET_PROCESS_REGISTRATION_USER_STATUS,
    SET_USER,
    SET_USER_REGISTER_ERRORS,
    UPDATE_USER
} from './actions';

const userReducer = (state = {}, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_NEW_USER:
        case SET_USER:
        case UPDATE_USER:
            return {
                ...state,
                value: action.payload,
            };
        case SET_USER_REGISTER_ERRORS:
            return {
                ...state,
                registrationErrors: action.payload,
            };
        case SET_PROCESS_REGISTRATION_USER_STATUS:
            return {
                ...state,
                registrationStatus: action.payload,
            };
        case CLEAR_USER:
            return {};
    }
    return state;
};

export default userReducer;