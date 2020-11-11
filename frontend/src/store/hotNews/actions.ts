export const SET_HOT_NEWS = 'SET_HOT_NEWS';

export const setHotNews = (hotNews: any[]) => ({
    type: SET_HOT_NEWS,
    payload: hotNews,
});

export const loadHotNews = () => (dispatch: any) =>
    dispatch(setHotNews([
        {
            id: '1',
            img: 'news1.jpg',
            tag: 'finance',
            title: 'Требониан Галл происходил из старинного этрусского рода. ' +
                'В конце правления императора Деция Траяна он занимал должность легата',
            statistic: {
                likesCount: 1500,
                commentsCount: 11500,
            }
        },
        {
            id: '2',
            img: 'news1.jpg',
            tag: 'sport',
            title: 'Требониан Галл происходил из старинного этрусского рода. ' +
                'В конце правления императора Деция Траяна он занимал должность легата',
            statistic: {
                likesCount: 1500,
                commentsCount: 11500,
            }
        },
        {
            id: '3',
            img: 'news1.jpg',
            tag: 'tv',
            title: 'Требониан Галл происходил из старинного этрусского рода. ' +
                'В конце правления императора Деция Траяна он занимал должность легата',
            statistic: {
                likesCount: 1500,
                commentsCount: 11500,
            }
        }
    ]));