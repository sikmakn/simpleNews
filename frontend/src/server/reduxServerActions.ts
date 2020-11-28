import fetchProcess from '../types/fetching';

export function commonReduxServerActionHandler({commonAction, dispatch, setError, setStatus, setSuccessObj}: {
    commonAction: Promise<any>,
    dispatch: any,
    setStatus: (status: fetchProcess) => any,
    setError: (error: string) => any,
    setSuccessObj: (obj: any) => any,
}) {
    dispatch(setStatus(fetchProcess.loading));
    commonAction
        .then(news => {
            dispatch(setSuccessObj(news));
            dispatch(setStatus(fetchProcess.success));
        })
        .catch(res => {
            if (res.message) {
                dispatch(setError(res.message));
                dispatch(setStatus(fetchProcess.error));
                return;
            }
            res.json().then(({error}: any) => {
                dispatch(setError(error));
                dispatch(setStatus(fetchProcess.error));
            })
        });
}