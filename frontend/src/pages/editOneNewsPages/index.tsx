import React from 'react';
import CommonEditPage from '../../components/commonEditPage';

export interface EditOneNewsPageProps {
    id: string
    tag: string
    img: string
    title: string
    text: string
}

const EditOneNewsPage: React.FC<EditOneNewsPageProps> =
    (props) =>  <CommonEditPage oneNews={props}/>;

export default EditOneNewsPage;