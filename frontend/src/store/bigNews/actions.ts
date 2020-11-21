import {GET} from '../../server/actions';
import {FIND_MANY_PATH} from '../../server/paths/news';

export const SET_BIG_NEWS = 'SET_BIG_NEWS';
export const LIKE_BIG_NEWS = 'LIKE_BIG_NEWS';

export const likeBigNews = (params: {
    value: boolean
    id: string
}) => ({type: LIKE_BIG_NEWS, payload: params});

export const setBigNews = (bigNews: any[]) => ({
    type: SET_BIG_NEWS,
    payload: bigNews,
});

//async

export const loadBigNews = (tag?: string) => (dispatch: any) => {
    let path = FIND_MANY_PATH;
    if (tag) path += `?tag=${tag}`;
    GET(path)
        .then(res => res.json())
        .then(news => dispatch(setBigNews(news)));
};

export const updateLikeInBigNews = (params: {
    id: string
    username: string
    value: boolean
}) => (dispatch: any) => dispatch(likeBigNews({...params}));