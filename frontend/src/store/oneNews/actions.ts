import {oneNewsPagePath} from "../../paths";

export const SET_ONE_NEWS = 'SET_ONE_NEWS';
export const EDIT_ONE_NEWS = 'EDIT_ONE_NEWS';
export const ADD_ONE_NEWS = 'ADD_ONE_NEWS';

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
    authorUsername: string
}) => ({
    type: SET_ONE_NEWS,
    payload: oneNews,
});

export const addOneNews = (oneNews: {
    id: string
    text: string
    title: string
    date: Date
    tag: string
    img: string
    statistic: {
        likesCount: number
        commentsCount: number
    }
    authorUsername: string
}) => ({type: ADD_ONE_NEWS, payload: oneNews});

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

//async

const oneNews = {
    id: '1',
    imgSrc: process.env.PUBLIC_URL + '/news1.jpg',
    tag: 'finance',
    date: new Date(2020, 5, 22, 10, 22),
    title: 'Требониан Галл происходил из старинного этрусского рода. ' +
        'В конце правления императора Деция Траяна он занимал должность легата',
    text: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. \n' +
        'Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей ' +
        '«Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
    statistic: {
        likesCount: 1500,
        commentsCount: 11500,
    },
    authorUsername: 'username',
    userStatistic: {}
};
export const loadOneNews = (id: string) =>
    (dispatch: any) =>
        setTimeout(() => dispatch(setOneNews({...oneNews, id})), 2000);


export const updateOneNews = (oneNews: {
    id: string
    img: File
    tag: string
    title: string
    text: string
    authorUsername: string
}) => (dispatch: any) => dispatch(editOneNews({
    ...oneNews,
    date: new Date(Date.now()),
    imgSrc: URL.createObjectURL(oneNews.img),
    statistic: {
        commentsCount: 0,
        likesCount: 0,
    }
}));

export const createOneNews = (oneNews: {
    img: File
    tag: string
    title: string
    text: string
    authorUsername: string,
    redirect: (path: string) => void
}) => (dispatch: any) => {
    const id = String(Math.random());
    dispatch(addOneNews({
        ...oneNews,
        id,
        date: new Date(Date.now()),
        img: URL.createObjectURL(oneNews.img),
        statistic: {
            commentsCount: 0,
            likesCount: 0,
        }
    }));
    oneNews.redirect(oneNewsPagePath(id))
}