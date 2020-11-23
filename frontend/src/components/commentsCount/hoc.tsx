import React from 'react';
import CommentsCount, {CommentsCountProps} from './index';
import {connect} from "react-redux";

interface CommentsCountHOCProps extends CommentsCountProps {
}

const CommentsCountHOC: React.FC<CommentsCountHOCProps> = (props) =>
    <CommentsCount {...props}/>;

const mapStateToProps = ({oneNews}: any) =>
    ({
        status: oneNews.loadingStatus,
        error: oneNews.loadingError,
        commentsCount: oneNews?.value?.statistic?.commentsCount,
    });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsCountHOC);