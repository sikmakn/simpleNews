import React from 'react';
import OneNewsCommentsContainer, {OneNewsCommentsContainerProps} from './index';
import {connect} from 'react-redux';
import {loadCountOfComments} from '../../store/comments/actions';

interface OneNewsCommentsContainerHOCProps extends OneNewsCommentsContainerProps {
}

const OneNewsCommentsContainerHOC: React.FC<OneNewsCommentsContainerHOCProps> = (props) =>
    <OneNewsCommentsContainer {...props}/>;

const mapStateToProps = ({comments}: any) => ({commentCount: comments?.count?.value});

const mapDispatchToProps = {loadCountOfComments};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsCommentsContainerHOC);