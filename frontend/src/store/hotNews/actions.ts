import {FIND_MANY_PATH} from '../../server/paths/news';
import {GET, PUT} from '../../server/actions';
import fetchProcess from '../../types/fetching';
import {LIKE_UPDATE_PATH} from '../../server/paths/like';

export const SET_HOT_NEWS = 'SET_HOT_NEWS';
export const LIKE_HOT_NEWS = 'LIKE_HOT_NEWS';
export const SET_LOADING_HOT_NEWS_STATUS = 'SET_LOADING_HOT_NEWS_STATUS';
export const SET_ERROR_OF_HOT_NEWS = 'SET_ERROR_OF_HOT_NEWS';
export const CLEAN_STATUS_OF_HOT_NEWS = 'CLEAN_STATUS_OF_HOT_NEWS';

export const setLoadingHotNewsStatus = (status: fetchProcess) =>
    ({type: SET_LOADING_HOT_NEWS_STATUS, payload: status});

export const setErrorOfHotNews = (error: string) =>
    ({type: SET_ERROR_OF_HOT_NEWS, payload: error});

export const setHotNews = (hotNews: any[]) => ({
    type: SET_HOT_NEWS,
    payload: hotNews,
});

export const likeHotNews = (params: {
    value: boolean
    id: string
}) => ({type: LIKE_HOT_NEWS, payload: params});

//async

export const cleanStatusOfHotNews = () =>
    (dispatch: any) => dispatch({type: CLEAN_STATUS_OF_HOT_NEWS});

export const loadHotNews = () => (dispatch: any) => {
    dispatch(setLoadingHotNewsStatus(fetchProcess.loading));
    GET(`${FIND_MANY_PATH}?sort=hot`, dispatch)
        .then(res => res.json())
        .then(news => {
            dispatch(setLoadingHotNewsStatus(fetchProcess.success));
            dispatch(setHotNews(news));
        })
        .catch(res => res.json().then(({error}: any) => {
            dispatch(setLoadingHotNewsStatus(fetchProcess.error));
            dispatch(setErrorOfHotNews(error));
        }));
};

export const updateLikeInHotNews = (id: string) => (dispatch: any) => {
    PUT(LIKE_UPDATE_PATH+id,{}, dispatch)
        .then(res=>res.json())
        .then(({value}: any) => dispatch(likeHotNews({value, id})));
};