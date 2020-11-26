import React from 'react';
import OneNewsCommentsContainer, {OneNewsCommentsContainerProps} from './index';
import {connect} from 'react-redux';

interface OneNewsCommentsContainerHOCProps extends OneNewsCommentsContainerProps {
}

const OneNewsCommentsContainerHOC: React.FC<OneNewsCommentsContainerHOCProps> = (props) =>
    <OneNewsCommentsContainer {...props}/>;

const mapStateToProps = ({user}: any) =>
    ({
        isSignedIn: !!user.value
    });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsCommentsContainerHOC);