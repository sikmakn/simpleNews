export const FETCH_LAST_NEWS = 'FETCH_LAST_NEWS';

export const setLastNews = (lastNews: any) => ({
    type: FETCH_LAST_NEWS,
    payload: lastNews,
});

export const loadLastNews = () => (dispatch: any) => {
    setTimeout(() => dispatch(setLastNews([
        {
            id: '1',
            date: new Date(2020, 5, 22, 10, 22),
            title: 'Требониан Галл происходил из старинного этрусского рода. ' +
                'В конце правления императора Деция Траяна он занимал должность легата',
        },
        {
            id: '2',
            date: new Date(2020, 5, 22, 10, 22),
            title: 'Требониан Галл происходил из старинного этрусского рода. ' +
                'В конце правления императора Деция Траяна он занимал должность легата',
        },
        {
            id: '3',
            date: new Date(2020, 5, 22, 10, 22),
            title: 'Требониан Галл происходил из старинного этрусского рода. ' +
                'В конце правления императора Деция Траяна он занимал должность легата',
        }
    ])), 2000);
}