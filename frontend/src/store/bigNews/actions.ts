export const SET_BIG_NEWS = 'SET_BIG_NEWS';

export const setBigNews = (bigNews: any[]) => ({
    type: SET_BIG_NEWS,
    payload: bigNews,
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
        },
        userStatistic: {
            isLiked: true
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
        },
        userStatistic: {
            isCommented: true,
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
        },
        userStatistic: {
            isLiked: true,
            isCommented: true,
        }
    }
];
export const loadBigNews = (tag: string) => (dispatch: any) =>
    setTimeout(() =>
            dispatch(setBigNews(tag ? bigNews.filter(n => n.tag === tag) : bigNews)),
        2000);