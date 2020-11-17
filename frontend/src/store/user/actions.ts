import {GET, POST, PUT} from '../../server/actions';
import {LOGIN_PATH, LOGOUT_PATH, REGISTER_PATH, UPDATE_PATH} from '../../server/paths/user';
import fetchProcess from '../../types/fetching';

export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const SET_USER_REGISTER_ERRORS = 'SET_USER_REGISTER_ERRORS';
export const SET_PROCESS_REGISTRATION_USER_STATUS = 'SET_PROCESS_REGISTRATION_USER_STATUS';
export const SET_PROCESS_LOGIN_USER_STATUS = 'SET_PROCESS_LOGIN_USER_STATUS';
export const SET_PROCESS_LOGIN_USER_ERRORS = 'SET_PROCESS_LOGIN_USER_ERRORS';
export const SET_PROCESS_UPDATE_USER_STATUS = 'SET_PROCESS_UPDATE_USER_STATUS';
export const SET_PROCESS_UPDATE_USER_ERROR = 'SET_PROCESS_UPDATE_USER_ERROR';

export const setUser = (user: {
    username: string,
    firstName: string,
    lastName: string,
    imgSrc?: string
}) => ({type: SET_USER, payload: user});

export const clearUser = () => ({type: CLEAR_USER});

export const setUserRegisterErrors = (errors: string[]) =>
    ({type: SET_USER_REGISTER_ERRORS, payload: errors});

export const setProcessRegistrationStatus = (status: fetchProcess) =>
    ({type: SET_PROCESS_REGISTRATION_USER_STATUS, payload: status});

export const setProcessLoginStatus = (status: fetchProcess) =>
    ({type: SET_PROCESS_LOGIN_USER_STATUS, payload: status});

export const setProcessLoginErrors = (errors: string[]) =>
    ({type: SET_PROCESS_LOGIN_USER_ERRORS, payload: errors});

export const setProcessUpdateUserStatus = (status: fetchProcess) =>
    ({type: SET_PROCESS_UPDATE_USER_STATUS, payload: status});

export const setProcessUpdateUserErrors = (error: string) =>
    ({type: SET_PROCESS_UPDATE_USER_ERROR, payload: error});

//async actions

export const registerNewUser = (user: {
    username: string,
    password: string,
    firstName: string,
    lastName: string
}) =>
    (dispatch: any) => {
        dispatch(setProcessRegistrationStatus(fetchProcess.loading));

        POST(REGISTER_PATH, user)
            .then(() =>
                dispatch(setProcessRegistrationStatus(fetchProcess.success)))
            .catch(res => res.json().then((res: any) => {
                dispatch(setUserRegisterErrors(res.errors));
                dispatch(setProcessRegistrationStatus(fetchProcess.error));
            }));
    };

export const signInUser = ({username, password}: { username: string, password: string }) =>
    (dispatch: any) => {
        dispatch(setProcessLoginStatus(fetchProcess.loading));
        POST(LOGIN_PATH, {username, password})
            .then(res => res.json())
            .then(({username, firstName, lastName, imgSrc}) => {
                dispatch(setProcessLoginStatus(fetchProcess.success));
                dispatch(setUser({
                    username,
                    firstName,
                    lastName,
                    imgSrc: imgSrc || undefined,
                }))
            })
            .catch(res => res.json().then((res: any) => {
                dispatch(setProcessLoginErrors(res.errors));
                dispatch(setProcessLoginStatus(fetchProcess.error));
            }));
    }

export const logOutUser = () => (dispatch: any) => {
    GET(LOGOUT_PATH).then(() => dispatch(clearUser()));
}

export const updateUserData = (user: {
    username: string
    firstName: string
    lastName: string
    img?: File
    password: string
    newPassword?: string
}) => (dispatch: any) => {
    dispatch(setProcessUpdateUserStatus(fetchProcess.loading));
    PUT(UPDATE_PATH, user)
        .then(res => res.json())
        .then((updatedUser) => {
            console.log(updatedUser)
            dispatch(setProcessUpdateUserStatus(fetchProcess.success));
            dispatch(setUser(updatedUser));
        })
        .catch(res => res.json().then((res: any) => {
            dispatch(setProcessUpdateUserErrors(res.error));
            dispatch(setProcessUpdateUserStatus(fetchProcess.error));
        }));
}