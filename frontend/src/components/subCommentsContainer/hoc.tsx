import React from 'react';
import SubCommentsContainer, {SubCommentsContainerProps} from './index';
import {connect} from 'react-redux';
import {loadSubComments} from '../../store/subComments/actions';

export interface SubCommentContainerHOCProps extends SubCommentsContainerProps {
}

const SubCommentContainerHOC: React.FC<SubCommentContainerHOCProps> =
    (props) => <SubCommentsContainer {...props}/>;

const mapStateToProps = ({oneNews, comments, subComments}: any, {commentId, makeSubCommentAnswer}: any) =>
    ({
        commentId,
        makeSubCommentAnswer,
        subComments: subComments.value[commentId],
        status: subComments.loadingStatuses[commentId],
        error: subComments.loadingErrors[commentId],
    });

const mapDispatchToProps = {loadSubComments};

export default connect(mapStateToProps, mapDispatchToProps)(SubCommentContainerHOC);