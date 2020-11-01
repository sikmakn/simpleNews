import React from 'react';
import Header from '../../components/header';
import MainLayout from '../../components/mainLayout';
import styles from './news.module.scss';
import BigNewsCard from "../../components/bigNewsCard";

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

const MainPage: React.FC = () => {
    return (
        <>
            <Header/>
            <MainLayout>
                <div className={styles.mainNewsContainer}>
                    {bigNews.map(n => <BigNewsCard key={n.id} {...n}/>)}
                </div>
            </MainLayout>
        </>
    );
};

export default MainPage;