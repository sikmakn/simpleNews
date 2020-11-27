import React from 'react';
import VerticalStatistic, {VerticalStatisticProps} from './index';
import {connect} from 'react-redux';

interface VerticalStatisticHOCProps extends VerticalStatisticProps {
}

const VerticalStatisticHOC: React.FC<VerticalStatisticHOCProps> =
    (props) => <VerticalStatistic {...props}/>;

const mapStateToProps = ({oneNews, user}: any) => ({
    id: oneNews.id,
    authorUsername: oneNews.value?.authorId,
    username: user.value?.username,
    status: oneNews.loadingStatus,
    error: oneNews.loadingError,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VerticalStatisticHOC);