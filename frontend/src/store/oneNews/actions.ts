import {commonReduxServerActionHandler} from '../../server/reduxServerActions';
import {GET, POSTForm, PUT, PUTForm} from '../../server/actions';
import {createOneNewsPath, findOneNewsPath, updateOneNewsPath} from '../../server/paths/news';
import {getLikeUpdatePath} from '../../server/paths/like';
import {OneNewsFull} from './types/oneNews';

export const SET_ID_OF_ONE_NEWS = 'SET_ID_OF_ONE_NEWS';
export const LIKE_ONE_NEWS = 'LIKE_ONE_NEWS';

export const SET_CREATING_ONE_NEWS_STATUS = 'SET_CREATING_ONE_NEWS_STATUS';
export const SET_CREATING_ONE_NEWS_ERROR = 'SET_CREATING_ONE_NEWS_ERROR';
export const SET_CREATED_ONE_NEWS = 'SET_CREATED_ONE_NEWS';

export const SET_UPDATED_ONE_NEWS = 'SET_UPDATED_ONE_NEWS';
export const SET_UPDATING_ONE_NEWS_ERROR = 'SET_UPDATING_ONE_NEWS_ERROR';
export const SET_UPDATING_ONE_NEWS_STATUS = 'SET_UPDATING_ONE_NEWS_STATUS';

export const SET_LOADED_ONE_NEWS = 'SET_LOADED_ONE_NEWS';
export const SET_LOADING_ONE_NEWS_STATUS = 'SET_LOADING_ONE_NEWS_STATUS';
export const SET_LOADING_ONE_NEWS_ERROR = 'SET_LOADING_ONE_NEWS_ERROR';


export const CLEAN_ONE_NEWS_STATUS = 'CLEAN_ONE_NEWS_STATUS';

export const setCreatingOneNewsStatus = () =>
    ({type: SET_CREATING_ONE_NEWS_STATUS});

export const setCreatingOneNewsError = (error: string) =>
    ({type: SET_CREATING_ONE_NEWS_ERROR, payload: error});

export const setCreatedOneNews = (id: string) =>
    ({type: SET_CREATED_ONE_NEWS, payload: id});


export const setLoadedOneNews = (oneNews: OneNewsFull) =>
    ({type: SET_LOADED_ONE_NEWS, payload: oneNews});

export const setLoadingOneNewsError = (error: string) =>
    ({type: SET_LOADING_ONE_NEWS_ERROR, payload: error});

export const setLoadingOneNewsStatus = () =>
    ({type: SET_LOADING_ONE_NEWS_STATUS});


export const setUpdatingOneNewsStatus = () =>
    ({type: SET_UPDATING_ONE_NEWS_STATUS});

export const setUpdatingOneNewsError = (error: string) =>
    ({type: SET_UPDATING_ONE_NEWS_ERROR, payload: error});

export const setUpdatedOneNews = (oneNews: OneNewsFull) =>
    ({type: SET_UPDATED_ONE_NEWS, payload: oneNews});

export const likeOneNews = (value: boolean) =>
    ({type: LIKE_ONE_NEWS, payload: value});

export const setIdOfOneNews = (id: string) =>
    ({type: SET_ID_OF_ONE_NEWS, payload: id});
//async

export const cleanOneNewsStatus = () =>
    (dispatch: any) => dispatch({type: CLEAN_ONE_NEWS_STATUS});

export const loadOneNews = (id: string) => (dispatch: any) =>
    commonReduxServerActionHandler({
        commonAction: GET(findOneNewsPath(id), dispatch),
        setSuccessObj: setLoadedOneNews,
        setError: setLoadingOneNewsError,
        setStatus: setLoadingOneNewsStatus,
        dispatch,
    });


export const updateOneNews = (oneNews: {
    id: string
    img?: File
    tag: string
    title: string
    text: string
}) => (dispatch: any) =>
    commonReduxServerActionHandler({
        commonAction: PUTForm(updateOneNewsPath(oneNews.id), oneNews, dispatch),
        setStatus: setUpdatingOneNewsStatus,
        setSuccessObj: setUpdatedOneNews,
        setError: setUpdatingOneNewsError,
        dispatch,
    });


export const createOneNews = (oneNews: {
    img: File
    tag: string
    title: string
    text: string
}) => (dispatch: any) =>
    commonReduxServerActionHandler({
        commonAction: POSTForm(createOneNewsPath(), oneNews, dispatch),
        dispatch,
        setStatus: setCreatingOneNewsStatus,
        setSuccessObj: res => setCreatedOneNews(res.id),
        setError: setCreatingOneNewsError,
    });

export const updateLikeInOneNews = (id: string) => (dispatch: any) =>
    PUT(getLikeUpdatePath(id), {}, dispatch)
        .then(({value}: any) => dispatch(likeOneNews(value)));