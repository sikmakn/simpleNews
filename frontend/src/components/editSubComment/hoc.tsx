import React from 'react';
import {connect} from 'react-redux';
import CommonEditComment from '../commonEditComment';
import {cleanSubCommentsStatuses, updateSubComment} from '../../store/subComments/actions';

interface EditSubCommentHOCProps {
    user: {
        username: string
        imgSrc: string
        firstName: string
        lastName: string
    }
    answerTo?: {
        firstName: string
        lastName: string
        username: string
    }
    subCommentId: string
    text: string
    commentId: string
    hide: () => void
    saveComment: (subComment: {
        authorId: string
        answerToId?: string
        text: string
        commentId: string
        subCommentId?: string
        oneNewsId: string
    }) => void
    oneNewsId: string
    cleanStatus: () => void
}

const EditSubCommentHOC: React.FC<EditSubCommentHOCProps> = (props) =>
    (<CommonEditComment {...props}/>);

const mapStateToProps = ({user, oneNews, subComments}: any, ownProps: any) =>
    ({
        oneNewsId: oneNews.id,
        user: user.value,
        status: subComments.updatingStatuses[ownProps.commentId]?.[ownProps.subCommentId],
        error: subComments.updatingStatuses[ownProps.commentId]?.[ownProps.subCommentId],
        ...ownProps
    });

const mapDispatchToProps = {saveComment: updateSubComment, cleanStatus: cleanSubCommentsStatuses};

export default connect(mapStateToProps, mapDispatchToProps)(EditSubCommentHOC);