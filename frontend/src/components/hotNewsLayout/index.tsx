import React, {useEffect} from 'react';
import ErrorMessage from '../errorMessage';
import ErrorLayout from '../errorsLayout';
import HotNewsCard, {HotNewsCardProps} from '../hotNewsCard';
import NewsColumnLayout from '../newsColumnLayout';
import Loader from '../loader';
import fetchProcess from '../../types/fetching';

export interface HotNewsLayoutProps {
    hotNews?: HotNewsCardProps[]
    loadHotNews: () => void
    cleanStatus: () => void
    status: fetchProcess
    error: string
}

const HotNewsLayout: React.FC<HotNewsLayoutProps> =
    ({
         hotNews,
         loadHotNews,
         status,
         error,
         cleanStatus,
     }) => {
        useEffect(() => loadHotNews(), [loadHotNews])

        useEffect(() => cleanStatus, [cleanStatus]);

        return (
            <NewsColumnLayout columnTitle={'Горячее'}>
                {error && <ErrorLayout>
                    <ErrorMessage message={error}/>
                </ErrorLayout>}
                {status === fetchProcess.loading && <Loader size={100}/>}
                {hotNews?.map(n => <HotNewsCard key={n.id} {...n}/>)}
            </NewsColumnLayout>
        );
    };

export default HotNewsLayout;