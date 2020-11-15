import React from 'react';
import VerticalStatistic, {VerticalStatisticProps} from './index';
import {connect} from 'react-redux';

interface VerticalStatisticHOCProps extends VerticalStatisticProps {
}

const VerticalStatisticHOC: React.FC<VerticalStatisticHOCProps> =
    (props) => <VerticalStatistic {...props}/>;

const mapStateToProps = ({oneNews, user}: any) => ({
    id: oneNews.value?.id,
    authorUsername: oneNews.value?.authorUsername,
    username: user.value?.username,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VerticalStatisticHOC);