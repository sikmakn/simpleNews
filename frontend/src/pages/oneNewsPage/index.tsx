import React from 'react';
import MainLayout from '../../components/mainLayout';
import NewsColumnLayout from '../../components/newsColumnLayout';
import LastNewsCard, {LastNewsCardProps} from '../../components/lastNewsCard';
import VerticalStatistic from '../../components/verticalStatistic';
import FullNews, {FullNewsProps} from '../../components/fullNews';
import HeaderHOC from '../../components/header/hoc';

interface OneNews extends FullNewsProps {
    statistic: {
        likesCount: number
        commentsCount: number
    }
}

export interface OneNewsPageProps {
    id: string
    lastNews?: LastNewsCardProps[]
    loadLastNews: () => void
    oneNews?: OneNews
    loadOneNews: (id: string) => void
}

const OneNewsPage: React.FC<OneNewsPageProps> =
    ({
         id,
         loadOneNews,
         lastNews,
         oneNews,
         loadLastNews
     }) => {
        if (!oneNews) loadOneNews(id);
        if (!lastNews) loadLastNews();
        return (
            <>
                <HeaderHOC/>
                <MainLayout>
                    {
                        oneNews &&
                        <>
                            <VerticalStatistic id={id} {...oneNews.statistic}/>
                            <FullNews {...oneNews}/>
                        </>
                    }
                    <NewsColumnLayout columnTitle="Последние новости">
                        {lastNews?.map(n => <LastNewsCard key={n.id} {...n}/>)}
                    </NewsColumnLayout>
                </MainLayout>
            </>
        );
    };

export default OneNewsPage;