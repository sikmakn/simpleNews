import React from 'react';
import SmallNewsCard, {SmallNewsCardProps} from '../smallNewsCard';
import NewsColumnLayout from '../newsColumnLayout';

export interface HotNewsLayoutProps {
    hotNews?: SmallNewsCardProps[]
    loadHotNews: () => void
}

const HotNewsLayout: React.FC<HotNewsLayoutProps> = ({hotNews, loadHotNews}) => {
    if (!hotNews) loadHotNews();
    return (
        <NewsColumnLayout columnTitle={'Горячее'}>
            {hotNews?.map(n => <SmallNewsCard key={n.id} {...n}/>)}
        </NewsColumnLayout>
    );
};

export default HotNewsLayout;