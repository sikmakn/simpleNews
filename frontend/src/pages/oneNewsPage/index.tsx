import React from 'react';
import MainLayout from '../../components/mainLayout';
import HeaderHOC from '../../components/header/hoc';
import LastNewsLayoutHOC from '../../components/lastNewsLayout/hoc';
import FullNewsHOC from '../../components/fullNews/hoc';
import VerticalStatisticHOC from '../../components/verticalStatistic/hoc';

export interface OneNewsPageProps {
}

const OneNewsPage: React.FC<OneNewsPageProps> = () => {
    return (
        <>
            <HeaderHOC/>
            <MainLayout>
                <VerticalStatisticHOC/>
                <FullNewsHOC/>
                <LastNewsLayoutHOC/>
            </MainLayout>
        </>
    );
};

export default OneNewsPage;