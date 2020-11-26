import React from 'react';
import SubCommentsContainer, {SubCommentsContainerProps} from './index';
import {connect} from 'react-redux';
import {loadSubComments} from "../../store/comments/actions";

export interface SubCommentContainerHOCProps extends SubCommentsContainerProps {
}

const SubCommentContainerHOC: React.FC<SubCommentContainerHOCProps> =
    (props) => <SubCommentsContainer {...props}/>;

const mapStateToProps = ({comments}: any, {commentId, makeSubCommentAnswer}: any) =>
    ({
        commentId,
        makeSubCommentAnswer,
        subComments: comments.value?.find((c: any) => c.id === commentId)?.subComments,
    });

const mapDispatchToProps = {loadSubComments};

export default connect(mapStateToProps, mapDispatchToProps)(SubCommentContainerHOC);