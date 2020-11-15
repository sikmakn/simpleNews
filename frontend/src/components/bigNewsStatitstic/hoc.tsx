import React from 'react';
import {updateLikeInBigNews} from '../../store/bigNews/actions';
import {connect} from 'react-redux';
import HorizontalStatistic, {HorizontalStatisticProps} from '../horizontalStatistic';

interface BigNewsStatisticHOCProps extends HorizontalStatisticProps {
}

const BigNewsStatisticHOC: React.FC<BigNewsStatisticHOCProps> = (props) =>
    <HorizontalStatistic {...props}/>;

const mapStateToProps = ({user, bigNews}: any, {id}: any) =>
    ({
        id,
        username: user.value?.username,
        fullStatistic: {...bigNews.value?.find((n: any) => n.id === id)},
    });

const mapDispatchToProps = {updateLike: updateLikeInBigNews};

export default connect(mapStateToProps, mapDispatchToProps)(BigNewsStatisticHOC);