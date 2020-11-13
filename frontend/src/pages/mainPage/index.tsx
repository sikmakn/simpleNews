import React from 'react';
import MainLayout from '../../components/mainLayout';
import HeaderHOC from '../../components/header/hoc';
import LastNewsLayoutHOC from '../../components/lastNewsLayout/hoc';
import HotNewsLayoutHOC from '../../components/hotNewsLayout/hoc';
import BigNewsLayoutHOC from '../../components/bigNewsLayout/hoc';

export interface MainPageProps {
}

const MainPage: React.FC<MainPageProps> = () =>
    (
        <>
            <HeaderHOC/>
            <MainLayout>
                <BigNewsLayoutHOC/>
                <HotNewsLayoutHOC/>
                <LastNewsLayoutHOC/>
            </MainLayout>
        </>
    );


export default MainPage;