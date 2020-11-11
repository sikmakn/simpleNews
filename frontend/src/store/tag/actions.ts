export const SET_TAG = 'SET_TAG';

export const setTag = (tag?: string) => ({
    type: SET_TAG,
    payload: tag,
});