export const SIGN_UP_FORM_REGISTER_USER = 'SIGN_UP_FORM_REGISTER_USER';

export const setNewUser =
    (user:
         {
             username: string,
             password: string,
             firstName: string,
             lastName: string
         }) => ({
        type: SIGN_UP_FORM_REGISTER_USER,
        payload: user
    });

export const registerNewUser =
    (user:
         {
             username: string,
             password: string,
             firstName: string,
             lastName: string
         }) =>
        (dispatch: any) => dispatch(setNewUser(user))