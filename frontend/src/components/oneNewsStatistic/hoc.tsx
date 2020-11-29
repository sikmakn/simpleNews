import React from 'react';
import Statistic, {StatisticProps} from '../statistic';
import {connect} from 'react-redux';
import {updateLikeInOneNews} from '../../store/oneNews/actions';

interface OneNewsStatisticHOCProps extends StatisticProps {
}

const OneNewsStatisticHOC: React.FC<OneNewsStatisticHOCProps> = (props) =>
    <Statistic {...props}/>;

const mapStateToProps = ({user, oneNews}: any) =>
    ({
        id: oneNews.id,
        username: user.value?.username,
        fullStatistic: oneNews.value && {
            statistic:oneNews.value.statistic,
            userStatistic:oneNews.value.userStatistic,
        },
    });

const mapDispatchToProps = {updateLike: updateLikeInOneNews};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsStatisticHOC);