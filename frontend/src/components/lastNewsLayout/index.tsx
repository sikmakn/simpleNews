import React from 'react';
import LastNewsCard, {LastNewsCardProps} from '../lastNewsCard';
import NewsColumnLayout from '../newsColumnLayout';

export interface LastNewsLayoutProps {
    lastNews?: LastNewsCardProps[]
    loadLastNews: () => void
}

const LastNewsLayout: React.FC<LastNewsLayoutProps> =
    ({lastNews, loadLastNews}) => {
        if (!lastNews) loadLastNews();
        return (
            <NewsColumnLayout columnTitle="Последние новости">
                {lastNews?.map(n => <LastNewsCard key={n.id} {...n}/>)}
            </NewsColumnLayout>
        )
    }

export default LastNewsLayout;