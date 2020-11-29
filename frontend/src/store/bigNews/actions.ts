import {GET, PUT} from '../../server/actions';
import {findManyNewsPath} from '../../server/paths/news';
import {commonReduxServerActionHandler} from '../../server/reduxServerActions';
import {getLikeUpdatePath} from '../../server/paths/like';

export const SET_LOADED_BIG_NEWS = 'SET_LOADED_BIG_NEWS';
export const SET_LOADING_BIG_NEWS_STATUS = 'SET_LOADING_BIG_NEWS_STATUS';
export const SET_LOADIG_BIG_NEWS_ERRORS = 'SET_BIG_NEWS_ERRORS';

export const LIKE_BIG_NEWS = 'LIKE_BIG_NEWS';
export const CLEAN_STATUS_OF_BIG_NEWS = 'CLEAN_STATUS_OF_BIG_NEWS';

export const setLoadingBigNewsError = (error: string) =>
    ({type: SET_LOADIG_BIG_NEWS_ERRORS, payload: error});

export const setLoadingBigNewsStatus = () =>
    ({type: SET_LOADING_BIG_NEWS_STATUS});

export const setLoadedBigNews = (bigNews: any[]) =>
    ({type: SET_LOADED_BIG_NEWS, payload: bigNews,});


export const likeBigNews = (params: {
    value: boolean
    id: string
}) => ({type: LIKE_BIG_NEWS, payload: params});


//async

export const loadBigNews = (tag?: string) => (dispatch: any) =>
    commonReduxServerActionHandler({
        commonAction: GET(findManyNewsPath({tag}), dispatch),
        dispatch,
        setStatus: setLoadingBigNewsStatus,
        setError: setLoadingBigNewsError,
        setSuccessObj: setLoadedBigNews
    });


export const updateLikeInBigNews = (id: string) =>
    (dispatch: any) => {
        PUT(getLikeUpdatePath(id), {}, dispatch)
            .then(({value}: any) => dispatch(likeBigNews({value, id})));
    }

export const cleanStatusOfBigNews = () =>
    (dispatch: any) => dispatch({type: CLEAN_STATUS_OF_BIG_NEWS});