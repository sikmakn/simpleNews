import React from 'react';
import VerticalStatistic, {VerticalStatisticProps} from './index';
import {connect} from 'react-redux';

interface VerticalStatisticHOCProps extends VerticalStatisticProps {
}

const VerticalStatisticHOC: React.FC<VerticalStatisticHOCProps> =
    (props) => <VerticalStatistic {...props}/>;

const mapStateToProps = ({oneNews, user}: any) => ({
    oneNews: oneNews.value && {
        id: oneNews.value.id,
        authorUsername: oneNews.value.authorUsername,
        statistic: oneNews.value.statistic,
        userStatistic: oneNews.value.userStatistic,
    },
    user: user.value,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VerticalStatisticHOC);