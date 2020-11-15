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

const bigNews = [
    {
        id: '1',
        imgSrc: 'news1.jpg',
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
        imgSrc: 'news1.jpg',
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
        imgSrc: 'news1.jpg',
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
export const loadBigNews = (params: {
    tag: string
    username?: string
}) => (dispatch: any) => {
    const news = [...(params.tag ? bigNews.filter(n => n.tag === params.tag) : bigNews)];
    news.push({
        id: String(Math.random()),
        tag: 'finance',
        title: Math.random() + 'title',
        imgSrc: process.env.PUBLIC_URL + '/news1.jpg',
        statistic: {
            likesCount: 0,
            commentsCount: 0
        },
        userStatistic: {
            isCommented: true,
        },
        description: 'scascsacsacas',
        date: new Date(Date.now())
    })
    setTimeout(() =>
            dispatch(setBigNews(news)),
        2000);
};

export const updateLikeInBigNews = (params: {
    id: string
    username: string
    value: boolean
}) => (dispatch: any) => dispatch(likeBigNews({...params}));