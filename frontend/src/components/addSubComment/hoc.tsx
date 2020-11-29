import React from 'react';
import {connect} from 'react-redux';
import CommonEditComment from '../commonEditComment';
import {createSubComment, cleanSubCommentsStatuses} from '../../store/subComments/actions';

interface AddSubCommentHOCProps {
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

const AddSubCommentHOC: React.FC<AddSubCommentHOCProps> = (props) =>
    (<CommonEditComment {...props}/>);

const mapStateToProps = ({user, oneNews, subComments}: any, ownProps: any) =>
    ({
        oneNewsId: oneNews.id,
        user: user.value,
        status: subComments.creatingStatuses[ownProps.commentId],
        error: subComments.creatingErrors[ownProps.commentId],
        ...ownProps
    });

const mapDispatchToProps = {saveComment: createSubComment, cleanStatus: cleanSubCommentsStatuses};

export default connect(mapStateToProps, mapDispatchToProps)(AddSubCommentHOC);