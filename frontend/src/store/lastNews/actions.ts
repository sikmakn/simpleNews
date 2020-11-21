import {FIND_MANY_BASIC} from '../../server/paths/news';
import {GET} from '../../server/actions';

export const SET_LAST_NEWS = 'SET_LAST_NEWS';

export const setLastNews = (lastNews: any) => ({
    type: SET_LAST_NEWS,
    payload: lastNews,
});

export const loadLastNews = () => (dispatch: any) => {
    GET(`${FIND_MANY_BASIC}?sort=last`)
        .then(res => res.json())
        .then(news => dispatch(setLastNews(news)));
}