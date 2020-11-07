import React from 'react';
import Header from '../../components/header';
import MainLayout from '../../components/mainLayout';
import styles from './news.module.scss';
import BigNewsCard from '../../components/bigNewsCard';
import SmallNewsCard from '../../components/smallNewsCard';
import LastNewsCard from '../../components/lastNewsCard';
import NewsColumnLayout from '../../components/newsColumnLayout';
import {RouteComponentProps} from 'react-router-dom';

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

const smallNews = [
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
];

const lastNews = [
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
];

export interface MainPageMatchParams {
    tag: string
}

const MainPage: React.FC<RouteComponentProps<MainPageMatchParams>> =
    ({match}) => {
        const {tag} = match.params;
        return (
            <>
                <Header/>
                <MainLayout>
                    <div className={styles.mainNewsContainer}>
                        {bigNews.map(n => <BigNewsCard key={n.id} {...n}/>)}
                    </div>
                    <NewsColumnLayout columnTitle={'Горячее'}>
                        {smallNews.map(n => <SmallNewsCard key={n.id} {...n}/>)}
                    </NewsColumnLayout>
                    <NewsColumnLayout columnTitle={'Последние новости'}>
                        {lastNews.map(n => <LastNewsCard key={n.id} {...n}/>)}
                    </NewsColumnLayout>
                </MainLayout>
            </>
        );
    };

export default MainPage;