import React from 'react';
import styles from './commentsContainer.module.scss';
import Comment, {CommentProps} from '../comment';

const comments: [CommentProps] = [
    {
        id: '1',
        text: 'На Максима подписан уже месяца три, все пересмотрел - ' +
            'много в чем не согласен с ним но и много в чем разделяю его мнение.\n' +
            'Спасибо за работу.\n' +
            'Ваш канал лично меня заставляет задуматся и в тех моментах с которыми ' +
            'не согласен заставляет самому попитатся докопатся до истины. \n' +
            'А это саморазвитие уже. Лайк за постоянство !!! Лайк за оперативность !!!',
        user: {
            id: '1',
            img: process.env.PUBLIC_URL + '/user_logo.svg',
            fullName: 'Андрей Свиридов',
        },
        subComments: [{
            id: '1',
            text: 'На Максима подписан уже месяца три, все пересмотрел - ' +
                'много в чем не согласен с ним но и много в чем разделяю его мнение.\n' +
                'Спасибо за работу.',
            user: {
                id: '2',
                img: process.env.PUBLIC_URL + '/user_logo.svg',
                fullName: 'Максим Давыдов'
            },
            answerTo: {
                id: '1',
                fullName: 'Андрей Свиридов'
            }
        }]
    }
];

const CommentsContainer: React.FC = () =>
    (<div className={styles.commentsContainer}>{comments.map(c => <Comment key={c.id} {...c}/>)}</div>);

export default CommentsContainer;