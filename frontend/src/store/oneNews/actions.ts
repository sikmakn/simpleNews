import {oneNewsPagePath} from '../../paths';
import fetchProcess from '../../types/fetching';
import {GET, POST} from '../../server/actions';
import {CREATE_PATH, FIND_ONE_PATH} from '../../server/paths/news';

export const SET_ONE_NEWS = 'SET_ONE_NEWS';
export const EDIT_ONE_NEWS = 'EDIT_ONE_NEWS';
export const LIKE_ONE_NEWS = 'LIKE_ONE_NEWS';
export const SET_CREATING_ONE_NEWS_STATUS = 'SET_CREATING_ONE_NEWS_STATUS';
export const SET_ERROR_OF_ONE_NEWS = 'SET_ERROR_OF_ONE_NEWS';

export const setCreationOneNewsStatus = (status: fetchProcess) =>
    ({type: SET_CREATING_ONE_NEWS_STATUS, payload: status});

export const setErrorOfOneNews = (error: string) =>
    ({type: SET_ERROR_OF_ONE_NEWS, payload: error});

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

export const editOneNews = (oneNews: {
    id: string
    text: string
    title: string
    date: Date
    tag: string
    imgSrc: string
    statistic: {
        likesCount: number
        commentsCount: number
    }
    authorUsername: string
}) => ({type: EDIT_ONE_NEWS, payload: oneNews});

export const likeOneNews = (params: {
    value: boolean
}) => ({type: LIKE_ONE_NEWS, payload: params});
//async

export const loadOneNews = (id: string) =>
    (dispatch: any) => {
    console.log(id)
        GET(`${FIND_ONE_PATH}${id}`)
            .then(res => res.json())
            .then(oneNews => {
                dispatch(setOneNews(oneNews));
            });
    }


export const updateOneNews = (oneNews: {
    id: string
    img: File
    tag: string
    title: string
    text: string
}) => (dispatch: any) => dispatch(editOneNews({
    ...oneNews,
    authorUsername: 'lol',
    date: new Date(Date.now()),
    imgSrc: URL.createObjectURL(oneNews.img),
    statistic: {
        commentsCount: 0,
        likesCount: 0,
    }
}));

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
        });
};

export const updateLikeInOneNews = (params: {
    id: string
    username: string
    value: boolean
}) => (dispatch: any) => {
    dispatch(likeOneNews({...params}));
}