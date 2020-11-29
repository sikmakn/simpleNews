import {findManyNewsPath} from '../../server/paths/news';
import {GET, PUT} from '../../server/actions';
import {getLikeUpdatePath} from '../../server/paths/like';
import {commonReduxServerActionHandler} from '../../server/reduxServerActions';

export const SET_LOADED_HOT_NEWS = 'SET_LOADED_HOT_NEWS';
export const LIKE_HOT_NEWS = 'LIKE_HOT_NEWS';
export const SET_LOADING_HOT_NEWS_STATUS = 'SET_LOADING_HOT_NEWS_STATUS';
export const SET_LOADING_HOT_NEWS_ERROR = 'SET_LOADING_HOT_NEWS_ERROR';
export const CLEAN_STATUS_OF_HOT_NEWS = 'CLEAN_STATUS_OF_HOT_NEWS';

export const setLoadingHotNewsStatus = () =>
    ({type: SET_LOADING_HOT_NEWS_STATUS});

export const setLoadingHotNewsError = (error: string) =>
    ({type: SET_LOADING_HOT_NEWS_ERROR, payload: error});

export const setLoadedHotNews = (hotNews: any[]) => ({type: SET_LOADED_HOT_NEWS, payload: hotNews,});


export const likeHotNews = (params: {
    value: boolean
    id: string
}) => ({type: LIKE_HOT_NEWS, payload: params});

//async

export const cleanStatusOfHotNews = () =>
    (dispatch: any) => dispatch({type: CLEAN_STATUS_OF_HOT_NEWS});

export const loadHotNews = () => (dispatch: any) =>
    commonReduxServerActionHandler({
        commonAction: GET(findManyNewsPath({sort: 'hot'}), dispatch),
        setStatus: setLoadingHotNewsStatus,
        setError: setLoadingHotNewsError,
        setSuccessObj: setLoadedHotNews,
        dispatch
    });


export const updateLikeInHotNews = (id: string) => (dispatch: any) => {
    PUT(getLikeUpdatePath(id), {}, dispatch)
        .then(({value}: any) => dispatch(likeHotNews({value, id})));
};