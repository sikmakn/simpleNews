import React from 'react';
import {connect} from 'react-redux';
import CommonEditComment from '../commonEditComment';
import {createSubComment} from "../../store/subComments/actions";

interface AddSubCommentHOCProps {
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
    commentId: string
    hide: () => void
    saveComment: (subComment: {
        authorUsername: string
        answerToUsername?: string
        text: string
        commentId: string
        subCommentId?: string
    }) => void
}

const AddSubCommentHOC: React.FC<AddSubCommentHOCProps> = (props) =>
    (<CommonEditComment {...props}/>);

const mapStateToProps = ({user}: any, ownProps: any) =>
    ({
        user: user.value,
        ...ownProps
    });

const mapDispatchToProps = {saveComment: createSubComment};

export default connect(mapStateToProps, mapDispatchToProps)(AddSubCommentHOC);