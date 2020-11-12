import React from 'react';
import AddCommentContainer, {AddCommentContainerProps} from './index';
import {connect} from 'react-redux';

interface AddCommentContainerHOCProps extends AddCommentContainerProps {
}

const AddCommentContainerHOC: React.FC<AddCommentContainerHOCProps> = (props) =>
    <AddCommentContainer{...props}/>;

const mapStateToProps = ({user}: any) => ({isSignedIn: !!user.value});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentContainerHOC);