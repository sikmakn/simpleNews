import React, {useEffect} from 'react';
import LastNewsCard, {LastNewsCardProps} from '../lastNewsCard';
import NewsColumnLayout from '../newsColumnLayout';
import Loader from '../loader';
import fetchProcess from '../../types/fetching';

export interface LastNewsLayoutProps {
    lastNews?: LastNewsCardProps[]
    loadLastNews: () => void
    cleanStatus: () => void
    status: fetchProcess
    error: string
}

const LastNewsLayout: React.FC<LastNewsLayoutProps> =
    ({
         error,
         status,
         cleanStatus,
         lastNews,
         loadLastNews
     }) => {

        useEffect(() => loadLastNews(), [loadLastNews]);

        useEffect(() => cleanStatus, [cleanStatus]);

        return (
            <NewsColumnLayout columnTitle="Последние новости">
                {error}
                {status === fetchProcess.loading && <Loader size={50}/>}
                {lastNews?.map(n => <LastNewsCard key={n.id} {...n}/>)}
            </NewsColumnLayout>
        );
    };

export default LastNewsLayout;