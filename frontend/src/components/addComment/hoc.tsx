import React from 'react';
import AddComment, {AddCommentsProps} from './index';
import {connect} from 'react-redux';
import {createComment} from '../../store/comments/actions';

interface AddCommentsHOCProps extends AddCommentsProps {
}

const AddCommentHOC: React.FC<AddCommentsHOCProps> = (props) =>
    <AddComment {...props}/>;

const mapStateToProps = ({user, oneNews, comments}: any,) =>
    ({
        user: user.value,
        oneNewsId: oneNews.id,
        status: comments.creatingStatus,
        error: comments.creatingError,
    });

const mapDispatchToProps = {createComment};

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentHOC);
