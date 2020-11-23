import {FIND_MANY_PATH} from '../../server/paths/news';
import {GET} from '../../server/actions';
import fetchProcess from '../../types/fetching';

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
    GET(`${FIND_MANY_PATH}?sort=hot`)
        .then(res => res.json())
        .then(news => dispatch(setHotNews(news)));
};

export const updateLikeInHotNews = (params: {
    id: string
    username: string
    value: boolean
}) => (dispatch: any) => dispatch(likeHotNews({...params}));