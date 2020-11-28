import React, {useEffect} from 'react';
import BigNewsCard, {BigNewsCardProps} from '../bigNewsCard';
import ErrorMessage from '../errorMessage';
import ErrorLayout from '../errorsLayout';
import styles from './bigNewsLayout.module.scss';
import Loader from '../loader';
import fetchProcess from '../../types/fetching';

export interface BigNewsLayoutProps {
    tag: string
    bigNews?: BigNewsCardProps[]
    loadBigNews: (tag?: string) => void
    status?: fetchProcess
    error?: string
    cleanStatus: () => void
}

const BigNewsLayout: React.FC<BigNewsLayoutProps> =
    ({
         tag,
         bigNews,
         loadBigNews,
         status,
         error,
         cleanStatus,
     }) => {

        useEffect(() => loadBigNews(tag), [tag, loadBigNews]);

        useEffect(() => cleanStatus, [cleanStatus]);

        return (
            <div className={styles.mainNewsContainer}>
                {error && <ErrorLayout>
                    <ErrorMessage message={error}/>
                </ErrorLayout>}
                {status === fetchProcess.loading && <Loader size={200}/>}
                {bigNews?.map(n => <BigNewsCard key={n.id} {...n}/>)}
            </div>
        );
    };

export default BigNewsLayout;