import React from 'react';
import styles from './existingCommentsContainer.module.scss';

const comments = [
    {
        id:'',
        text:'',
        user:{
            id:'',
            img:'',
            fullname:'',
        },
        subComments:[]
    }
];

const ExistingCommentsContainer:React.FC = ()=>
    (<div>
        {/*todo to comment and SubComments components*/}
        <div className={styles.commentContainer}>
            <img className="user-comment-image" src="public/user_logo.svg" alt=""/>
            <div>
                <span className="username">Андрей Свиридов</span>
                <div className="comment-text">
                    На Максима подписан уже месяца три, все пересмотрел - много в чем не согласен с ним но и
                    много в чем разделяю его мнение.
                    Спасибо за работу.
                    Ваш канал лично меня заставляет задуматся и в тех моментах с которыми не согласен заставляет
                    самому попитатся докопатся до истины.
                    А это саморазвитие уже. Лайк за постоянство !!! Лайк за оперативность !!!
                </div>
                <span className="answer">Ответить</span>
                <span className="hide-show"> <img src="public/up-arrow.svg" alt=""/>Скрыть все ответы</span>
                <div className="comment-container">
                    <img src="public/user_logo.svg" alt="" className="subcomment-user-logo"/>
                    <div>
                        <span className="username">Я</span>
                        <div className="comment-text">
                            <span className="answer-reference">@Максим Давыдов</span>
                            На Максима подписан уже месяца три, все пересмотрел - много в чем не согласен с
                            ним
                            но и
                            много в чем разделяю его мнение.
                            Спасибо за работу.
                            Ваш канал лично меня заставляет задуматся и в тех моментах с которыми не
                            согласен
                            заставляет
                            самому попитатся докопатся до истины.
                            А это саморазвитие уже. Лайк за постоянство !!! Лайк за оперативность !!!
                        </div>
                        <span className="answer">Редактировать</span>
                    </div>
                </div>
            </div>
        </div>
    </div>);

export default ExistingCommentsContainer;