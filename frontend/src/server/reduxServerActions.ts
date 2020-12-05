export function commonReduxServerActionHandler({commonAction, dispatch, setError, setStatus, setSuccessObj}: {
    commonAction: Promise<any>,
    dispatch: any,
    setStatus: () => any,
    setError: (error: string) => any,
    setSuccessObj: (obj: any) => any,
}) {
    dispatch(setStatus());
    commonAction
        .then(result => dispatch(setSuccessObj(result)))
        .catch(res => res.message ?
            dispatch(setSuccessObj(res.message)) :
            res.json().then(({error}: any) => dispatch(setError(error)))
        );
}