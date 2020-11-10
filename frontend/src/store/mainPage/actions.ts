export const MAIN_PAGE_FETCH_BIG_NEWS = 'MAIN_PAGE_FETCH_BIG_NEWS';
export const MAIN_PAGE_FETCH_SMALL_NEWS = 'MAIN_PAGE_FETCH_SMALL_NEWS';
export const MAIN_PAGE_FETCH_LAST_NEWS = 'MAIN_PAGE_FETCH_LAST_NEWS';

export const setBigNews = (bigNews: any[]) => ({
    type: MAIN_PAGE_FETCH_BIG_NEWS,
    payload: bigNews,
});

export const setSmallNews = (smallNews: any[]) => ({
    type: MAIN_PAGE_FETCH_SMALL_NEWS,
    payload: smallNews,
});

export const setLastNews = (lastNews: any) => ({
    type: MAIN_PAGE_FETCH_LAST_NEWS,
    payload: lastNews,
});

const bigNews = [
    {
        id: '1',
        img: 'news1.jpg',
        tag: 'finance',
        date: new Date(2020, 5, 22, 10, 22),
        title: 'Требониан Галл происходил из старинного этрусского рода. ' +
            'В конце правления императора Деция Траяна он занимал должность легата',
        description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. \n' +
            'Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей ' +
            '«Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
        statistic: {
            likesCount: 1500,
            commentsCount: 11500,
        }
    },
    {
        id: '2',
        img: 'news1.jpg',
        tag: 'sport',
        date: new Date(2020, 5, 22, 10, 22),
        title: 'Требониан Галл происходил из старинного этрусского рода. ' +
            'В конце правления императора Деция Траяна он занимал должность легата',
        description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. \n' +
            'Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей ' +
            '«Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
        statistic: {
            likesCount: 1500,
            commentsCount: 11500,
        }
    },
    {
        id: '3',
        img: 'news1.jpg',
        tag: 'tv',
        date: new Date(2020, 5, 22, 10, 22),
        title: 'Требониан Галл происходил из старинного этрусского рода. ' +
            'В конце правления императора Деция Траяна он занимал должность легата',
        description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. \n' +
            'Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей ' +
            '«Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
        statistic: {
            likesCount: 1500,
            commentsCount: 11500,
        }
    }
];
export const loadBigNews = (tag: string) => (dispatch: any) =>
    dispatch(setBigNews(tag ? bigNews.filter(n => n.tag === tag) : bigNews))


export const loadSmallNews = () => (dispatch: any) =>
    dispatch(setSmallNews([
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