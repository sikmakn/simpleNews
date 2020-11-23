import React from 'react';
import {connect} from 'react-redux';
import HotNewsLayout, {HotNewsLayoutProps} from './index';
import {cleanStatusOfHotNews, loadHotNews} from '../../store/hotNews/actions';

interface HotNewsLayoutHOCProps extends HotNewsLayoutProps {
}

const HotNewsLayoutHOC: React.FC<HotNewsLayoutHOCProps> =
    (props) => <HotNewsLayout {...props}/>;

const mapStateToProps = ({hotNews}: any) =>
    ({
        hotNews: hotNews.value,
        error: hotNews.loadingError,
        status: hotNews.loadingStatus,
    });

const dispatchStateToProps = {
    loadHotNews,
    cleanStatus: cleanStatusOfHotNews,
};

export default connect(mapStateToProps, dispatchStateToProps)(HotNewsLayoutHOC);
