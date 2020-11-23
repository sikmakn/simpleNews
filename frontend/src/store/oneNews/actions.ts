import {oneNewsPagePath} from '../../paths';
import fetchProcess from '../../types/fetching';
import {GET, POST, PUT} from '../../server/actions';
import {CREATE_PATH, FIND_ONE_PATH, UPDATE_PATH} from '../../server/paths/news';

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

export const likeOneNews = (params: {
    value: boolean
}) => ({type: LIKE_ONE_NEWS, payload: params});

//async

export const cleanOneNewsStatus = () =>
    (dispatch: any) => dispatch({type: CLEAN_ONE_NEWS_STATUS});

export const loadOneNews = (id: string) =>
    (dispatch: any) => {
        dispatch(setLoadingOneNewsStatus(fetchProcess.loading));
        GET(`${FIND_ONE_PATH}${id}`)
            .then(res => res.json())
            .then(oneNews => {
                dispatch(setLoadingOneNewsStatus(fetchProcess.success));
                dispatch(setOneNews(oneNews));
            })
            .catch(res => res.json().then(({error}: any) => {
                dispatch(setLoadingOneNewsStatus(fetchProcess.error));
                dispatch(setErrorLoadingOfOneNews(error));
            }));
    };


export const updateOneNews = (oneNews: {
    id: string
    img: File
    tag: string
    title: string
    text: string
}) => (dispatch: any) => {
    dispatch(setUpdatingOneNewsStatus(fetchProcess.loading));
    PUT(UPDATE_PATH + oneNews.id, oneNews)
        .then(res => res.json())
        .then(oneNews => {
            dispatch(setUpdatingOneNewsStatus(fetchProcess.success));
            dispatch(setOneNews(oneNews));
        })
        .catch(res => res.json().then(({error}: any) => {
            dispatch(setUpdatingOneNewsStatus(fetchProcess.error));
            dispatch(setUpdateErrorOfOneNews(error));
        }));
};

export const createOneNews = (
    {
        redirect,
        ...oneNews
    }: {
        img: File
        tag: string
        title: string
        text: string
        redirect: (path: string) => void
    }) => (dispatch: any) => {
    dispatch(setCreationOneNewsStatus(fetchProcess.loading));
    POST(CREATE_PATH, oneNews)
        .then(res => res.json())
        .then(oneNews => {
            dispatch(setCreationOneNewsStatus(fetchProcess.success));
            dispatch(setOneNews({
                ...oneNews,
                statistic: {
                    commentsCount: 0,
                    likesCount: 0,
                },
                userStatistic: {},
            }));
            redirect(oneNewsPagePath(oneNews.id));
        })
        .catch(res => res.json().then(({error}: any) => {
            dispatch(setCreationOneNewsStatus(fetchProcess.error));
            dispatch(setCreatingErrorOfOneNews(error));
        }));
};

export const updateLikeInOneNews = (params: {
    id: string
    username: string
    value: boolean
}) => (dispatch: any) =>
    dispatch(likeOneNews({...params}));