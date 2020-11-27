import React from 'react';
import {connect} from 'react-redux';
import CommonEditComment from '../commonEditComment';
import {updateSubComment} from '../../store/subComments/actions';

interface EditSubCommentHOCProps {
    user: {
        username: string
        imgSrc: string
        firstName: string
        lastName: string
    }
    answerTo?: {
        fullName: string
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
}

const EditSubCommentHOC: React.FC<EditSubCommentHOCProps> = (props) =>
    (<CommonEditComment {...props}/>);

const mapStateToProps = ({user, oneNews}: any, ownProps: any) =>
    ({
        oneNewsId: oneNews.id,
        user: user.value,
        ...ownProps
    });

const mapDispatchToProps = {saveComment: updateSubComment};

export default connect(mapStateToProps, mapDispatchToProps)(EditSubCommentHOC);