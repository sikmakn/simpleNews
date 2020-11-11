import React from 'react';
import MainLayout from '../../components/mainLayout';
import VerticalStatistic from '../../components/verticalStatistic';
import FullNews, {FullNewsProps} from '../../components/fullNews';
import HeaderHOC from '../../components/header/hoc';
import LastNewsLayoutHOC from '../../components/lastNewsLayout/hoc';

interface OneNews extends FullNewsProps {
    statistic: {
        likesCount: number
        commentsCount: number
    }
}

export interface OneNewsPageProps {
    id: string
    oneNews?: OneNews
    loadOneNews: (id: string) => void
}

const OneNewsPage: React.FC<OneNewsPageProps> =
    ({
         id,
         loadOneNews,
         oneNews,
     }) => {
        if (!oneNews) loadOneNews(id);
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
                    <LastNewsLayoutHOC/>
                </MainLayout>
            </>
        );
    };

export default OneNewsPage;