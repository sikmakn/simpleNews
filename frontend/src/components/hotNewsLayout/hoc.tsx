import React from 'react';
import {connect} from 'react-redux';
import HotNewsLayout, {HotNewsLayoutProps} from './index';
import {loadHotNews} from '../../store/hotNews/actions';

interface HotNewsLayoutHOCProps extends HotNewsLayoutProps {
}

const HotNewsLayoutHOC: React.FC<HotNewsLayoutHOCProps> =
    (props) => <HotNewsLayout {...props}/>;

const mapStateToProps = ({hotNews}: any) =>
    ({hotNews: hotNews.value});

const dispatchStateToProps = {loadHotNews};

export default connect(mapStateToProps, dispatchStateToProps)(HotNewsLayoutHOC);
