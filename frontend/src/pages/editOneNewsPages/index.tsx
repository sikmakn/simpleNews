import React from 'react';
import CommonEditPage, {CommonEditPageProps} from '../../components/commonEditPage';

export interface EditOneNewsPageProps extends CommonEditPageProps {
}

const EditOneNewsPage: React.FC<EditOneNewsPageProps> =
    (props) => <CommonEditPage {...props}/>;

export default EditOneNewsPage;