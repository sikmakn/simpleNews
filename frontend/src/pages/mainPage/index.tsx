import React, {useEffect} from 'react';
import MainLayout from '../../components/mainLayout';
import styles from './news.module.scss';
import BigNewsCard, {BigNewsCardProps} from '../../components/bigNewsCard';
import SmallNewsCard, {SmallNewsCardProps} from '../../components/smallNewsCard';
import NewsColumnLayout from '../../components/newsColumnLayout';
import HeaderHOC from '../../components/header/hoc';
import LastNewsLayoutHOC from '../../components/lastNewsLayout/hoc';

export interface MainPageProps {
    tag: string
    bigNews?: BigNewsCardProps[]
    smallNews?: SmallNewsCardProps[]
    loadBigNews: (tag: string) => void
    loadSmallNews: () => void
}

const MainPage: React.FC<MainPageProps> =
    ({
         tag,
         bigNews,
         smallNews,
         loadSmallNews,
         loadBigNews
     }) => {
        if (!bigNews) loadBigNews(tag);
        if (!smallNews) loadSmallNews();

        useEffect(() => loadBigNews(tag), [tag]);
        return (
            <>
                <HeaderHOC/>
                <MainLayout>
                    <div className={styles.mainNewsContainer}>
                        {bigNews?.map(n => <BigNewsCard key={n.id} {...n}/>)}
                    </div>
                    <NewsColumnLayout columnTitle={'Горячее'}>
                        {smallNews?.map(n => <SmallNewsCard key={n.id} {...n}/>)}
                    </NewsColumnLayout>
                    <LastNewsLayoutHOC/>
                </MainLayout>
            </>
        );
    };

export default MainPage;