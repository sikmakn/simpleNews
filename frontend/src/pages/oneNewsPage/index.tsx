import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Header from "../../components/header";
import MainLayout from "../../components/mainLayout";
import NewsColumnLayout from "../../components/newsColumnLayout";
import LastNewsCard from "../../components/lastNewsCard";
import VerticalStatistic from "../../components/verticalStatistic";
import FullNews from "../../components/fullNews";

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

export interface OneNewsPageMatchParams {
    id: string
}

const OneNewsPage: React.FC<RouteComponentProps<OneNewsPageMatchParams>> =
    ({match}) => {
        const {id} = match.params;
        console.log(id)
        return (
            <>
                <Header/>
                <MainLayout>
                    <VerticalStatistic {...oneNews.statistic}/>
                    <FullNews {...oneNews}/>
                    <NewsColumnLayout columnTitle={'Последние новости'}>
                        {lastNews.map(n => <LastNewsCard key={n.id} {...n}/>)}
                    </NewsColumnLayout>
                </MainLayout>
            </>
        );
    };

export default OneNewsPage;