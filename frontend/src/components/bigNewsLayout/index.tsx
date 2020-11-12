import React, {useEffect} from 'react';
import BigNewsCard, {BigNewsCardProps} from '../bigNewsCard';
import styles from './bigNewsLayout.module.scss';
import Loader from '../loader';

export interface BigNewsLayoutProps {
    tag: string
    bigNews?: BigNewsCardProps[]
    loadBigNews: (tag: string) => void
}

const BigNewsLayout: React.FC<BigNewsLayoutProps> =
    ({tag, bigNews, loadBigNews}) => {
        if (!bigNews) loadBigNews(tag);

        useEffect(() => loadBigNews(tag), [tag, loadBigNews]);

        return (
            <div className={styles.mainNewsContainer}>
                {!bigNews && <Loader size={200}/>}
                {bigNews?.map(n => <BigNewsCard key={n.id} {...n}/>)}
            </div>
        );
    };

export default BigNewsLayout;