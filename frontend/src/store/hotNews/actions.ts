import {findManyNewsPath} from '../../server/paths/news';
import {GET, PUT} from '../../server/actions';
import {commonReduxServerActionHandler} from '../../server/reduxServerActions';
import fetchProcess from '../../types/fetching';
import {getLikeUpdatePath} from '../../server/paths/like';

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
    commonReduxServerActionHandler({
        commonAction: GET(findManyNewsPath({sort: 'hot'}), dispatch),
        setStatus: setLoadingHotNewsStatus,
        setError: setErrorOfHotNews,
        setSuccessObj: setHotNews,
        dispatch
    });
    // dispatch(setLoadingHotNewsStatus(fetchProcess.loading));
    // GET(findManyNewsPath({sort: 'hot'}), dispatch)
    //     .then(news => {
    //         dispatch(setLoadingHotNewsStatus(fetchProcess.success));
    //         dispatch(setHotNews(news));
    //     })
    //     .catch(res => res.json().then(({error}: any) => {
    //         dispatch(setLoadingHotNewsStatus(fetchProcess.error));
    //         dispatch(setErrorOfHotNews(error));
    //     }));
};

export const updateLikeInHotNews = (id: string) => (dispatch: any) => {
    PUT(getLikeUpdatePath(id), {}, dispatch)
        .then(({value}: any) => dispatch(likeHotNews({value, id})));
};