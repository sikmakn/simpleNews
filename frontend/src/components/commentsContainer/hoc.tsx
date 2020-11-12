import React from 'react';
import CommentsContainer, {CommentsContainerProps} from './index';
import {connect} from 'react-redux';
import {loadComments} from '../../store/comments/actions';

interface CommentsContainerHOCProps extends CommentsContainerProps {
}

const CommentsContainerHOC: React.FC<CommentsContainerHOCProps> = (props) =>
    <CommentsContainer{...props}/>;

const mapStateToProps = ({comments, oneNews}: any) =>
    ({
        comments: comments.comments.value,
        oneNewsId: oneNews.value?.id
    });

const mapDispatchToProps = {loadComments};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainerHOC);