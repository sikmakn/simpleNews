import React from 'react';
import CommonComment, {CommonCommentProps} from './index';
import {connect} from 'react-redux';

interface CommonCommentHOCProps extends CommonCommentProps {
}

const CommonCommentHOC: React.FC<CommonCommentHOCProps> = (props) =>
    <CommonComment {...props}/>;

const mapStateToProps = ({user}: any, ownProps: any) =>
    ({
        user:user.value,
        ...ownProps
    });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CommonCommentHOC);