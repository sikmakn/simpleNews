export const SET_ONE_NEWS = 'SET_ONE_NEWS';

export const setOneNews = (oneNews: {
    id: string
    title: string
    text: string
    date: Date
    tag: string
    img: string
    statistic: {
        likesCount: number
        commentsCount: number
    }
}) => ({
    type: SET_ONE_NEWS,
    payload: oneNews,
});

const oneNews = {
    id: '1',
    img: 'news1.jpg',
    tag: 'finance',
    date: new Date(2020, 5, 22, 10, 22),
    title: 'Требониан Галл происходил из старинного этрусского рода. ' +
        'В конце правления императора Деция Траяна он занимал должность легата',
    text: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. \n' +
        'Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей ' +
        '«Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
    statistic: {
        likesCount: 1500,
        commentsCount: 11500,
    }
};
export const loadOneNews = (id: string) =>
    (dispatch: any) => {
        setTimeout(() => dispatch(setOneNews({...oneNews, id})), 2000);
    }
