import React from 'react';
import HotNewsCard, {HotNewsCardProps} from '../hotNewsCard';
import NewsColumnLayout from '../newsColumnLayout';
import Loader from '../loader';

export interface HotNewsLayoutProps {
    hotNews?: HotNewsCardProps[]
    loadHotNews: () => void
}

const HotNewsLayout: React.FC<HotNewsLayoutProps> =
    ({hotNews, loadHotNews}) => {
        if (!hotNews) loadHotNews();
        return (
            <NewsColumnLayout columnTitle={'Горячее'}>
                {!hotNews && <Loader size={100}/>}
                {hotNews?.map(n => <HotNewsCard key={n.id} {...n}/>)}
            </NewsColumnLayout>
        );
    };

export default HotNewsLayout;