import React from 'react';
import CommentsContainer, {CommentsContainerProps} from './index';
import {connect} from 'react-redux';
import {cleanStatusOfComments, loadComments} from '../../store/comments/actions';

interface CommentsContainerHOCProps extends CommentsContainerProps {
}

const CommentsContainerHOC: React.FC<CommentsContainerHOCProps> = (props) =>
    <CommentsContainer {...props}/>;

const mapStateToProps = ({comments, oneNews}: any) =>
    ({
        comments: comments.value,
        status: comments.loadingStatus,
        error: comments.loadingError,
        oneNewsId: oneNews.id,
    });

const mapDispatchToProps = {loadComments, cleanStatus: cleanStatusOfComments};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainerHOC);