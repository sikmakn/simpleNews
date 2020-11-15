import React from 'react';
import {connect} from 'react-redux';
import {updateLikeInHotNews} from '../../store/hotNews/actions';
import HorizontalStatistic, {HorizontalStatisticProps} from '../horizontalStatistic';

interface HotNewsStatisticHOCProps extends HorizontalStatisticProps {
}

const HotNewsStatisticHOC: React.FC<HotNewsStatisticHOCProps> = (props) =>
    <HorizontalStatistic {...props}/>;

const mapStateToProps = ({user, hotNews}: any, {id}: any) =>
    ({
        id,
        username: user.value?.username,
        fullStatistic: {...hotNews.value?.find((n: any) => n.id === id)},
    });

const mapDispatchToProps = {updateLike: updateLikeInHotNews};

export default connect(mapStateToProps, mapDispatchToProps)(HotNewsStatisticHOC);