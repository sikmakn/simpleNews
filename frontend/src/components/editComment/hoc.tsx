import React from 'react';
import {connect} from 'react-redux';
import {updateComment} from '../../store/comments/actions';
import CommonEditComment from '../commonEditComment';

interface EditCommentHOCProps {
    user: {
        username: string
        imgSrc: string
        firstName: string
        lastName: string
    }
    text: string
    commentId: string
    hide: () => void
    saveComment: (subComment: {
        authorId: string
        text: string
        commentId: string
        oneNewsId: string
    }) => void
    oneNewsId: string
}

const EditCommentHOC: React.FC<EditCommentHOCProps> = (props) =>
    (<CommonEditComment{...props}/>);

const mapStateToProps = ({user, oneNews, comments}: any, ownProps: any) =>
    ({
        oneNewsId: oneNews.value.id,
        user: user.value,
        status: comments.updatingStatuses[ownProps.commentId],
        error: comments.updatingErrors[ownProps.commentId],
        ...ownProps
    });

const mapDispatchToProps = {saveComment: updateComment};

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentHOC);