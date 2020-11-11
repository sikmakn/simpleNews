export const SET_NEW_USER = 'REGISTER_USER';
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const setNewUser =
    (user:
         {
             username: string,
             firstName: string,
             lastName: string
         }) => ({type: SET_NEW_USER, payload: user});

export const setUser =
    (user:
         {
             username: string,
             firstName: string,
             lastName: string,
             imgSrc?: string
         }) => ({type: SET_USER, payload: user});

export const clearUser = () => ({type: CLEAR_USER});

//async actions

export const registerNewUser = (
    {
        username,
        firstName,
        lastName,
        password
    }:
        {
            username: string,
            password: string,
            firstName: string,
            lastName: string
        }) =>
    (dispatch: any) => dispatch(setNewUser({username, firstName, lastName}));

export const signInUser = (user: { username: string, password: string }) =>
    (dispatch: any) => dispatch(setUser({
        username: user.username,
        firstName: 'Никита',
        lastName: 'Разработчик'
    }));

export const logOutUser = () => (dispatch: any) => dispatch(clearUser())