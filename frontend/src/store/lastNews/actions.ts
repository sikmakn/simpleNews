import {FIND_MANY_BASIC} from '../../server/paths/news';
import {GET} from '../../server/actions';
import fetchProcess from '../../types/fetching';

export const SET_LAST_NEWS = 'SET_LAST_NEWS';
export const SET_LOADING_LAST_NEWS_STATUS = 'SET_LOADING_LAST_NEWS_STATUS';
export const SET_ERROR_OF_LAST_NEWS = 'SET_ERROR_OF_LAST_NEWS';
export const CLEAN_STATUS_OF_LAST_NEWS = 'CLEAN_STATUS_OF_LAST_NEWS';

export const setLoadingLastNewsStatus = (status: fetchProcess) =>
    ({type: SET_LOADING_LAST_NEWS_STATUS, payload: status});

export const setErrorOfLastNews = (error: string) =>
    ({type: SET_ERROR_OF_LAST_NEWS, payload: error});

export const setLastNews = (lastNews: any) => ({
    type: SET_LAST_NEWS,
    payload: lastNews,
});

// async

export const loadLastNews = () => (dispatch: any) => {
    dispatch(setLoadingLastNewsStatus(fetchProcess.loading));
    GET(`${FIND_MANY_BASIC}?sort=last`)
        .then(res => res.json())
        .then(news => {
            dispatch(setLoadingLastNewsStatus(fetchProcess.success));
            dispatch(setLastNews(news));
        })
        .catch(res => res.json().then(({error}: any) => {
            dispatch(setLoadingLastNewsStatus(fetchProcess.error));
            dispatch(setErrorOfLastNews(error));
        }));
};

export const cleanStatusOfLastNews = () => (dispatch: any) =>
    dispatch({type: CLEAN_STATUS_OF_LAST_NEWS});