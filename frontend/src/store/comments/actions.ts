export const SET_COUNT_OF_COMMENTS = 'SET_COUNT_OF_COMMENTS';
export const SET_COMMENTS = 'SET_COMMENTS';

export const setCountOfComments = (count: number) =>
    ({type: SET_COUNT_OF_COMMENTS, payload: count});

//async

export const loadCountOfComments = () => (dispatch: any) =>
    dispatch(setCountOfComments(11500));