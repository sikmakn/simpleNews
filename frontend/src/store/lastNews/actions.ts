import {GET} from '../../server/actions';
import {findManyBasicPath} from '../../server/paths/news';
import {commonReduxServerActionHandler} from '../../server/reduxServerActions';

export const SET_LOADED_LAST_NEWS = 'SET_LOADED_LAST_NEWS';
export const SET_LOADING_LAST_NEWS_STATUS = 'SET_LOADING_LAST_NEWS_STATUS';
export const SET_LOADING_LAST_NEWS_ERROR = 'SET_LOADING_LAST_NEWS_ERROR';

export const CLEAN_STATUS_OF_LAST_NEWS = 'CLEAN_STATUS_OF_LAST_NEWS';

export const setLoadingLastNewsStatus = () =>
    ({type: SET_LOADING_LAST_NEWS_STATUS});

export const setLoadingLastNewsError = (error: string) =>
    ({type: SET_LOADING_LAST_NEWS_ERROR, payload: error});

export const setLoadedLastNews = (lastNews: any) =>
    ({type: SET_LOADED_LAST_NEWS, payload: lastNews,});

// async

export const loadLastNews = () => (dispatch: any) =>
    commonReduxServerActionHandler({
        commonAction: GET(findManyBasicPath({sort: 'last'}), dispatch),
        dispatch,
        setStatus: setLoadingLastNewsStatus,
        setError: setLoadingLastNewsError,
        setSuccessObj: setLoadedLastNews,
    });


export const cleanStatusOfLastNews = () => (dispatch: any) =>
    dispatch({type: CLEAN_STATUS_OF_LAST_NEWS});