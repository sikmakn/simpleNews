import React from 'react';
import CommonEditPage from '../../components/commonEditPage';
import fetchProcess from '../../types/fetching';

export interface AddOneNewsPageProps {
    save: (oneNews: {
        img: File
        tag: string
        title: string
        text: string
    }) => void,
    cancel: () => void,
    error?: string
    status?: fetchProcess
}

const AddOneNewsPage: React.FC<AddOneNewsPageProps> = (props) =>
    (<CommonEditPage {...props}/>);

export default AddOneNewsPage;