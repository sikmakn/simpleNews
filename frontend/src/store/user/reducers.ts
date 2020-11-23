import {
    CLEAR_STATUS_OF_USER,
    CLEAR_USER,
    SET_PROCESS_LOGIN_USER_ERRORS,
    SET_PROCESS_LOGIN_USER_STATUS,
    SET_PROCESS_REGISTRATION_USER_STATUS,
    SET_PROCESS_UPDATE_USER_ERROR,
    SET_PROCESS_UPDATE_USER_STATUS,
    SET_USER,
    SET_USER_REGISTER_ERRORS
} from './actions';
import fetchProcess from '../../types/fetching';

const user = window.localStorage.getItem('user');
const defaultState: {
    value?: any
    registrationStatus?: fetchProcess
    registrationErrors?: string[]
    loginProcessStatus?: fetchProcess
    loginErrors?: string[]
    updateError?: string
    updateProcessStatus?: fetchProcess
} = {value: user ? JSON.parse(user) : undefined};

const userReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_USER:
            window.localStorage.setItem('user', JSON.stringify(action.payload));
            return {
                ...state,
                value: action.payload
            };
        case SET_USER_REGISTER_ERRORS:
            return {
                ...state,
                registrationErrors: action.payload,
            };
        case SET_PROCESS_REGISTRATION_USER_STATUS:
            return setStatus({
                state,
                payload: action.payload,
                statusName: 'registrationStatus',
                errorsName: 'registrationErrors'
            });
        case SET_PROCESS_LOGIN_USER_ERRORS:
            return {
                ...state,
                loginErrors: action.payload,
            };
        case SET_PROCESS_LOGIN_USER_STATUS:
            return setStatus({
                state,
                payload: action.payload,
                statusName: 'loginProcessStatus',
                errorsName: 'loginErrors',
            });
        case SET_PROCESS_UPDATE_USER_ERROR:
            return {
                ...state,
                updateError: action.payload,
            };
        case SET_PROCESS_UPDATE_USER_STATUS:
            return setStatus({
                state,
                payload: action.payload,
                statusName: 'updateProcessStatus',
                errorsName: 'updateError',
            });
        case CLEAR_STATUS_OF_USER:
            return {value: state.value};
        case CLEAR_USER:
            window.localStorage.removeItem('user');
            return {};
    }
    return state;
};

export default userReducer;

function setStatus({state, payload, errorsName, statusName}: {
    state: any
    payload: any
    statusName: string
    errorsName: string
}) {
    const stateWithoutErrors: any = {};
    for (let [key, value] of Object.entries(state))
        if (key !== errorsName) stateWithoutErrors[key] = value;

    const newState: any = {
        ...stateWithoutErrors,
        [statusName]: payload,
    };
    if (payload !== fetchProcess.success) newState[errorsName] = state[errorsName];
    return newState;
}