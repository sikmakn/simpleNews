import React from 'react';
import Statistic, {StatisticProps} from '../statistic';
import {connect} from 'react-redux';
import {updateLikeInOneNews} from '../../store/oneNews/actions';

interface OneNewsStatisticHOCProps extends StatisticProps {
}

const OneNewsStatisticHOC: React.FC<OneNewsStatisticHOCProps> = (props) =>
    <Statistic {...props}/>;

const mapStateToProps = ({user, oneNews}: any, {id}: any) =>
    ({
        id,
        username: user.value?.username,
        fullStatistic: {...oneNews.value},
    });

const mapDispatchToProps = {updateLike:updateLikeInOneNews};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsStatisticHOC);