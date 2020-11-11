import React from 'react';
import styles from './oneNewsPage.module.scss';
import MainLayout from '../../components/mainLayout';
import HeaderHOC from '../../components/header/hoc';
import LastNewsLayoutHOC from '../../components/lastNewsLayout/hoc';
import FullNewsHOC from '../../components/fullNews/hoc';
import VerticalStatisticHOC from '../../components/verticalStatistic/hoc';
import OneNewsCommentsContainer from '../../components/oneNewsCommentsContainer';

export interface OneNewsPageProps {
}

const OneNewsPage: React.FC<OneNewsPageProps> = () => {
    return (
        <>
            <HeaderHOC/>
            <MainLayout>
                <VerticalStatisticHOC/>
                <div className={styles.fullNewsContainer}>
                    <FullNewsHOC/>
                    <OneNewsCommentsContainer/>
                </div>
                <LastNewsLayoutHOC/>
            </MainLayout>
        </>
    );
};

export default OneNewsPage;