import {
    CLEAR_USER, SET_PROCESS_LOGIN_USER_ERRORS,
    SET_PROCESS_LOGIN_USER_STATUS,
    SET_PROCESS_REGISTRATION_USER_STATUS,
    SET_USER,
    SET_USER_REGISTER_ERRORS,
    UPDATE_USER
} from './actions';
import fetchProcess from '../../types/fetching';

const defaultState: {
    value?: any
    registrationStatus?: fetchProcess
    registrationErrors?: string[]
    loginProcessStatus?: fetchProcess
} = {};

const userReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_USER:
            return {value: action.payload};
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
                registrationErrors: action.payload !== fetchProcess.success
                    && state.registrationErrors
            };
        case SET_PROCESS_LOGIN_USER_ERRORS:
            return {
                ...state,
                loginErrors: action.payload,
            }
        case SET_PROCESS_LOGIN_USER_STATUS:
            return {
                ...state,
                loginProcessStatus: action.payload,
            }
        case CLEAR_USER:
            return {};
    }
    return state;
};

export default userReducer;