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
        authorUsername: string
        text: string
        commentId: string
        oneNewsId: string
    }) => void
    oneNewsId: string
}

const EditCommentHOC: React.FC<EditCommentHOCProps> = ({oneNewsId, saveComment, ...props}) =>
    (<CommonEditComment
        {...props}
        saveComment={
            (comment: {
                authorUsername: string
                text: string
                commentId: string
            }) => saveComment({oneNewsId, ...comment})
        }
    />);

const mapStateToProps = ({user, oneNews}: any, ownProps: any) =>
    ({
        oneNewsId: oneNews.value.id,
        user: user.value,
        ...ownProps
    });

const mapDispatchToProps = {
    saveComment: updateComment
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentHOC);