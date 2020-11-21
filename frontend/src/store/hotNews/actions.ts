import {FIND_MANY_PATH} from '../../server/paths/news';
import {GET} from '../../server/actions';

export const SET_HOT_NEWS = 'SET_HOT_NEWS';
export const LIKE_HOT_NEWS = 'LIKE_HOT_NEWS';

export const setHotNews = (hotNews: any[]) => ({
    type: SET_HOT_NEWS,
    payload: hotNews,
});

export const likeHotNews = (params: {
    value: boolean
    id: string
}) => ({type: LIKE_HOT_NEWS, payload: params});

//async

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