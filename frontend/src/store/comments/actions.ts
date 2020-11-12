export const SET_COUNT_OF_COMMENTS = 'SET_COUNT_OF_COMMENTS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

export const setCountOfComments = (count: number) =>
    ({type: SET_COUNT_OF_COMMENTS, payload: count});

export const addComment = (comment: {
    text: string
    authorId: string
    oneNewsId: string
    subComments: any[]
}) => ({type: ADD_COMMENT, payload: comment});

export const setComments = (comments: any) =>
    ({type: SET_COMMENTS, payload: comments});

//async

export const loadCountOfComments = () => (dispatch: any) =>
    dispatch(setCountOfComments(11500));

export const createComment = (comment: {
    text: string
    authorId: string
    oneNewsId: string
}) => (dispatch: any) =>
    dispatch(addComment({...comment, subComments: []}));

export const loadComments = (oneNewsId: string) => (dispatch: any) =>
    dispatch(setComments([
    {
        id: '1',
        text: 'На Максима подписан уже месяца три, все пересмотрел - ' +
            'много в чем не согласен с ним но и много в чем разделяю его мнение.\n' +
            'Спасибо за работу.\n' +
            'Ваш канал лично меня заставляет задуматся и в тех моментах с которыми ' +
            'не согласен заставляет самому попитатся докопатся до истины. \n' +
            'А это саморазвитие уже. Лайк за постоянство !!! Лайк за оперативность !!!',
        author: {
            username: '1',
            img: process.env.PUBLIC_URL + '/user_logo.svg',
            fullName: 'Андрей Свиридов',
        },
        subComments: [{
            id: '1',
            text: 'На Максима подписан уже месяца три, все пересмотрел - ' +
                'много в чем не согласен с ним но и много в чем разделяю его мнение.\n' +
                'Спасибо за работу.',
            author: {
                username: '2',
                img: process.env.PUBLIC_URL + '/user_logo.svg',
                fullName: 'Максим Давыдов'
            },
            answerTo: {
                username: '1',
                fullName: 'Андрей Свиридов'
            }
        }]
    }
]));
