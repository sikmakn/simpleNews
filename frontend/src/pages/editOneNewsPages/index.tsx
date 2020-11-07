import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import CommonEditPage from '../../components/commonEditPage';

const oneNews = {
    id: '1',
    img: process.env.PUBLIC_URL + '/news1.jpg',
    tag: 'finance',
    title: 'Требониан Галл происходил из старинного этрусского рода. ' +
        'В конце правления императора Деция Траяна он занимал должность легата',
    text: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. \n' +
        'Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей ' +
        '«Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
};

export interface EditOneNewsPageProps {
    id: string
}

const EditOneNewsPage: React.FC<RouteComponentProps<EditOneNewsPageProps>> =
    ({match}) => {
        const {id} = match.params;
        return <CommonEditPage oneNews={oneNews}/>;
    };

export default EditOneNewsPage;