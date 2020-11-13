import React from 'react';
import AddSubComment, {AddSubCommentProps} from './index';
import {connect} from 'react-redux';
import {createSubComment} from '../../store/comments/actions';

interface AddSubCommentHOCProps extends AddSubCommentProps {
}

const AddSubCommentHOC: React.FC<AddSubCommentHOCProps> = (props) =>
    (<AddSubComment {...props}/>);

const mapStateToProps = ({user}: any, ownProps: any) =>
    ({
        user: user.value,
        ...ownProps
    });

const mapDispatchToProps = {
    createSubComment
};

export default connect(mapStateToProps, mapDispatchToProps)(AddSubCommentHOC);