import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Header from "../../components/header";
import MainLayout from "../../components/mainLayout";

export interface OneNewsPageMatchParams {
    id: string
}

const OneNewsPage: React.FC<RouteComponentProps<OneNewsPageMatchParams>> =
    ({match}) => {
        const {id} = match.params;
        return (
            <>
                <Header/>
                <MainLayout>

                </MainLayout>
            </>
        );
    };

export default OneNewsPage;