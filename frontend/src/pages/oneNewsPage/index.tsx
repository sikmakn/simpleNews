import React, {useEffect} from 'react';
import styles from './oneNewsPage.module.scss';

import MainLayout from '../../components/mainLayout';
import HeaderHOC from '../../components/header/hoc';
import LastNewsLayoutHOC from '../../components/lastNewsLayout/hoc';
import FullNewsHOC from '../../components/fullNews/hoc';
import VerticalStatisticHOC from '../../components/verticalStatistic/hoc';
import OneNewsCommentsContainerHOC from '../../components/oneNewsCommentsContainer/hoc';

export interface OneNewsPageProps {
    cleanStatus: () => void
}

const OneNewsPage: React.FC<OneNewsPageProps> =
    ({cleanStatus}) => {
        useEffect(() => cleanStatus, [cleanStatus]);
        return (
            <>
                <HeaderHOC/>
                <MainLayout>
                    <VerticalStatisticHOC/>
                    <div className={styles.fullNewsContainer}>
                        <FullNewsHOC/>
                        <OneNewsCommentsContainerHOC/>
                    </div>
                    <LastNewsLayoutHOC/>
                </MainLayout>
            </>
        );
    };

export default OneNewsPage;