import {commonReduxServerActionHandler} from '../../server/reduxServerActions';
import fetchProcess from '../../types/fetching';
import {GET, POSTForm, PUT, PUTForm} from '../../server/actions';
import {createOneNewsPath, findOneNewsPath, updateOneNewsPath} from '../../server/paths/news';
import {getLikeUpdatePath} from '../../server/paths/like';

export const SET_ID_OF_ONE_NEWS = 'SET_ID_OF_ONE_NEWS';
export const SET_ONE_NEWS = 'SET_ONE_NEWS';
export const LIKE_ONE_NEWS = 'LIKE_ONE_NEWS';
export const SET_CREATING_ONE_NEWS_STATUS = 'SET_CREATING_ONE_NEWS_STATUS';
export const SET_CREATING_ERROR_OF_ONE_NEWS = 'SET_CREATING_ERROR_OF_ONE_NEWS';
export const SET_UPDATE_ERROR_OF_ONE_NEWS = 'SET_UPDATE_ERROR_OF_ONE_NEWS';
export const SET_UPDATING_ONE_NEWS_STATUS = 'SET_UPDATING_ONE_NEWS_STATUS';
export const SET_LOADING_ONE_NEWS_STATUS = 'SET_LOADING_ONE_NEWS_STATUS';
export const SET_ERROR_LOADING_OF_ONE_NEWS = 'SET_ERROR_LOADING_OF_ONE_NEWS';
export const CLEAN_ONE_NEWS_STATUS = 'CLEAN_ONE_NEWS_STATUS';

export const setCreatingErrorOfOneNews = (error: string) =>
    ({type: SET_CREATING_ERROR_OF_ONE_NEWS, payload: error});

export const setErrorLoadingOfOneNews = (error: string) =>
    ({type: SET_ERROR_LOADING_OF_ONE_NEWS, payload: error});

export const setLoadingOneNewsStatus = (status: fetchProcess) =>
    ({type: SET_LOADING_ONE_NEWS_STATUS, payload: status});

export const setUpdatingOneNewsStatus = (status: fetchProcess) =>
    ({type: SET_UPDATING_ONE_NEWS_STATUS, payload: status});

export const setCreationOneNewsStatus = (status: fetchProcess) =>
    ({type: SET_CREATING_ONE_NEWS_STATUS, payload: status});

export const setUpdateErrorOfOneNews = (error: string) =>
    ({type: SET_UPDATE_ERROR_OF_ONE_NEWS, payload: error});

export const setOneNews = (oneNews: {
    id: string
    title: string
    text: string
    date: Date
    tag: string
    imgSrc: string
    statistic: {
        likesCount: number
        commentsCount: number
    }
    userStatistic?: {
        isLiked?: boolean,
        isCommented?: boolean
    }
    authorUsername: string
}) => ({
    type: SET_ONE_NEWS,
    payload: oneNews,
});

export const likeOneNews = (value: boolean) =>
    ({type: LIKE_ONE_NEWS, payload: value});

export const setIdOfOneNews = (id: string) =>
    ({type: SET_ID_OF_ONE_NEWS, payload: id});
//async

export const cleanOneNewsStatus = () =>
    (dispatch: any) => dispatch({type: CLEAN_ONE_NEWS_STATUS});

export const loadOneNews = (id: string) =>
    (dispatch: any) => commonReduxServerActionHandler({
        commonAction: GET(findOneNewsPath(id), dispatch),
        setSuccessObj: setOneNews,
        setError: setErrorLoadingOfOneNews,
        setStatus: setLoadingOneNewsStatus,
        dispatch,
    });

export const updateOneNews = (oneNews: {
    id: string
    img?: File
    tag: string
    title: string
    text: string
}) => (dispatch: any) => commonReduxServerActionHandler({
    commonAction: PUTForm(updateOneNewsPath(oneNews.id), oneNews, dispatch),
    setStatus: setUpdatingOneNewsStatus,
    setSuccessObj: setOneNews,
    setError: setUpdateErrorOfOneNews,
    dispatch,
});

export const createOneNews = (oneNews: {
    img: File
    tag: string
    title: string
    text: string
}) => (dispatch: any) => commonReduxServerActionHandler({
    commonAction: POSTForm(createOneNewsPath(), oneNews, dispatch),
    dispatch,
    setStatus: setCreationOneNewsStatus,
    setSuccessObj: res => setIdOfOneNews(res.id),
    setError: setCreatingErrorOfOneNews,
});

export const updateLikeInOneNews = (id: string) => (dispatch: any) => {
    PUT(getLikeUpdatePath(id), {}, dispatch)
        .then(({value}: any) => dispatch(likeOneNews(value)));
};