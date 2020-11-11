import React from 'react';
import VerticalStatistic, {VerticalStatisticProps} from './index';
import {connect} from 'react-redux';

interface VerticalStatisticHOCProps extends VerticalStatisticProps {
}

const VerticalStatisticHOC: React.FC<VerticalStatisticHOCProps> =
    (props) => <VerticalStatistic {...props}/>;

const mapStateToProps = ({oneNews, user}: any) => ({
    id: oneNews.value?.id,
    user: user.value,
    authorUsername: oneNews.value?.authorUsername,
    likesCount: oneNews.value?.statistic?.likesCount,
    commentsCount: oneNews.value?.statistic?.commentsCount
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VerticalStatisticHOC);