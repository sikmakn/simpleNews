import React, {useEffect} from 'react';
import BigNewsCard, {BigNewsCardProps} from '../bigNewsCard';
import styles from './bigNewsLayout.module.scss';
import Loader from '../loader';

export interface BigNewsLayoutProps {
    tag: string
    username?: string
    bigNews?: BigNewsCardProps[]
    loadBigNews: (params: {
        tag: string
        username?: string
    }) => void
}

const BigNewsLayout: React.FC<BigNewsLayoutProps> =
    ({tag, bigNews, loadBigNews, username}) => {
        if (!bigNews) loadBigNews({tag, username});

        useEffect(() => loadBigNews({tag, username}),
            [tag, loadBigNews, username]);

        return (
            <div className={styles.mainNewsContainer}>
                {!bigNews && <Loader size={200}/>}
                {bigNews?.map(n => <BigNewsCard key={n.id} {...n}/>)}
            </div>
        );
    };

export default BigNewsLayout;