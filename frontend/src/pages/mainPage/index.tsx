import React, {useEffect} from 'react';
import Header from '../../components/header';
import MainLayout from '../../components/mainLayout';
import styles from './news.module.scss';
import BigNewsCard, {BigNewsCardProps} from '../../components/bigNewsCard';
import SmallNewsCard, {SmallNewsCardProps} from '../../components/smallNewsCard';
import LastNewsCard, {LastNewsCardProps} from '../../components/lastNewsCard';
import NewsColumnLayout from '../../components/newsColumnLayout';

export interface MainPageMatchProps {
    tag: string
    bigNews?: BigNewsCardProps[]
    smallNews?: SmallNewsCardProps[]
    lastNews?: LastNewsCardProps[]
    loadBigNews: (tag: string) => void
    loadSmallNews: () => void
    loadLastNews: () => void
}

const MainPage: React.FC<MainPageMatchProps> =
    ({tag, bigNews, smallNews, lastNews, loadLastNews, loadSmallNews, loadBigNews}) => {
        if (!bigNews) loadBigNews(tag);
        if (!smallNews) loadSmallNews();
        if (!lastNews) loadLastNews();

        useEffect(()=>loadBigNews(tag),[tag]);
        return (
            <>
                <Header/>
                <MainLayout>
                    <div className={styles.mainNewsContainer}>
                        {bigNews?.map(n => <BigNewsCard key={n.id} {...n}/>)}
                    </div>
                    <NewsColumnLayout columnTitle={'Горячее'}>
                        {smallNews?.map(n => <SmallNewsCard key={n.id} {...n}/>)}
                    </NewsColumnLayout>
                    <NewsColumnLayout columnTitle={'Последние новости'}>
                        {lastNews?.map(n => <LastNewsCard key={n.id} {...n}/>)}
                    </NewsColumnLayout>
                </MainLayout>
            </>
        );
    };

export default MainPage;