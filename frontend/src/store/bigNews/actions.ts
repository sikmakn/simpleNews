import {GET, PUT} from '../../server/actions';
import {findManyNewsPath} from '../../server/paths/news';
import {commonReduxServerActionHandler} from '../../server/reduxServerActions';
import fetchProcess from '../../types/fetching';
import {getLikeUpdatePath} from '../../server/paths/like';

export const SET_BIG_NEWS = 'SET_BIG_NEWS';
export const LIKE_BIG_NEWS = 'LIKE_BIG_NEWS';
export const SET_LOADING_BIG_NEWS_STATUS = 'SET_LOADING_BIG_NEWS_STATUS';
export const SET_ERROR_OF_BIG_NEWS = 'SET_ERROR_OF_BIG_NEWS';
export const CLEAN_STATUS_OF_BIG_NEWS = 'CLEAN_STATUS_OF_BIG_NEWS';

export const setErrorOfBigNews = (error: string) =>
    ({type: SET_ERROR_OF_BIG_NEWS, payload: error});

export const loadingBigNewsStatus = (status: fetchProcess) =>
    ({type: SET_LOADING_BIG_NEWS_STATUS, payload: status});

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
    commonReduxServerActionHandler({
        commonAction: GET(findManyNewsPath({tag}), dispatch),
        dispatch,
        setStatus: loadingBigNewsStatus,
        setError: setErrorOfBigNews,
        setSuccessObj: setBigNews
    });
    // dispatch(loadingBigNewsStatus(fetchProcess.loading));
    // GET(findManyNewsPath({tag}), dispatch)
    //     .then(news => {
    //         dispatch(loadingBigNewsStatus(fetchProcess.success));
    //         dispatch(setBigNews(news));
    //     })
    //     .catch(res => res.json().then(({error}: any) => {
    //         dispatch(loadingBigNewsStatus(fetchProcess.error));
    //         dispatch(setErrorOfBigNews(error));
    //     }));
};

export const updateLikeInBigNews = (id: string) =>
    (dispatch: any) => {
        PUT(getLikeUpdatePath(id), {}, dispatch)
            .then(({value}: any) => dispatch(likeBigNews({value, id})));
    }

export const cleanStatusOfBigNews = () =>
    (dispatch: any) => dispatch({type: CLEAN_STATUS_OF_BIG_NEWS});