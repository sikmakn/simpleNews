export const SET_COUNT_OF_COMMENTS = 'SET_COUNT_OF_COMMENTS';
export const SET_COMMENTS = 'SET_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_SUB_COMMENT = 'ADD_SUB_COMMENT';
export const EDIT_SUB_COMMENT = 'EDIT_SUB_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';

export const setCountOfComments = (count: number) =>
    ({type: SET_COUNT_OF_COMMENTS, payload: count});

export const addComment = (comment: {
    id: string
    text: string
    author: {
        username: string
        fullName: string
    }
    oneNewsId: string
    subComments: any[]
}) => ({type: ADD_COMMENT, payload: comment});

export const addSubComment = (subComment: {
    id: string
    author: {
        username: string
        fullName: string
        imgSrc?: string
    }
    answerTo?: {
        username: string
        fullName: string
    }
    text: string
    commentId: string
}) =>
    ({type: ADD_SUB_COMMENT, payload: subComment});

export const setComments = (comments: any) =>
    ({type: SET_COMMENTS, payload: comments});

export const editSubComment = (subComment: any) =>
    ({type: EDIT_SUB_COMMENT, payload: subComment});

export const editComment = (comment: {
    id: string
    text: string
    author: {
        username: string
        fullName: string
    }
    oneNewsId: string
}) => ({type: EDIT_COMMENT, payload: comment})

//async

export const loadCountOfComments = () => (dispatch: any) =>
    setTimeout(() => dispatch(setCountOfComments(11500)), 1000);

export const createComment = (comment: {
    text: string
    authorUsername: string
    oneNewsId: string
}) => (dispatch: any) =>
    dispatch(addComment({
        id: String(Math.random()*10),
        text: comment.text,
        oneNewsId: comment.oneNewsId,
        author: {
            username: comment.authorUsername,
            fullName: 'full name',
        },
        subComments: []
    }));

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
                username: 'username',
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

export const createSubComment = (subComment: {
    authorUsername: string
    answerToUsername?: string
    text: string
    commentId: string
}) => (dispatch: any) =>
    dispatch(addSubComment({
        id: String(Math.random()),
        answerTo: subComment.answerToUsername ? {
            username: subComment.answerToUsername,
            fullName: "Какой-то челик"
        } : undefined,
        author: {
            fullName: 'Z',
            username: subComment.authorUsername
        },
        text: subComment.text,
        commentId: subComment.commentId,
    }));


export const updateSubComment = (subComment: {
    authorUsername: string
    answerToUsername?: string
    text: string
    subCommentId: string
    commentId: string
}) => (dispatch: any) =>
    dispatch(editSubComment({
        id: subComment.subCommentId,
        answerTo: subComment.answerToUsername ? {
            username: subComment.answerToUsername,
            fullName: "Какой-то челик"
        } : undefined,
        author: {
            fullName: 'Z',
            username: subComment.authorUsername
        },
        text: subComment.text,
        commentId: subComment.commentId
    }));

export const updateComment = (comment: {
    commentId: string
    text: string
    authorUsername: string
    oneNewsId: string
}) => (dispatch: any) =>
    dispatch(editComment({
        id: comment.commentId,
        text: comment.text,
        author: {
            username: comment.authorUsername,
            fullName: 'Keker'
        },
        oneNewsId: comment.oneNewsId
    }));