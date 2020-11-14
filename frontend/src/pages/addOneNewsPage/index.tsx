import React from 'react';
import CommonEditPage from '../../components/commonEditPage';

export interface AddOneNewsPageProps {
    save: (oneNews: {
        img: File
        tag: string
        title: string
        text: string
    }) => void,
    cancel: () => void,
}

const AddOneNewsPage:React.FC<AddOneNewsPageProps> = (props) =>
    (<CommonEditPage {...props}/>);

export default AddOneNewsPage;