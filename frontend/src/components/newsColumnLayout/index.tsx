import React from 'react';
import styles from './newsColumnLayout.module.scss';

export interface NewsColumnLayoutProps {
    columnTitle: string
}

const NewsColumnLayout: React.FC<NewsColumnLayoutProps> =
    ({columnTitle, children}) =>
        (<div className={styles.hotContainer}>
            <h2>{columnTitle}</h2>
            <div>{children}</div>
        </div>);

export default NewsColumnLayout;