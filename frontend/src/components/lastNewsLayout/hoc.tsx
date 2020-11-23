import React from 'react';
import LastNewsLayout, {LastNewsLayoutProps} from './index';
import {connect} from 'react-redux';
import {cleanStatusOfLastNews, loadLastNews} from '../../store/lastNews/actions';

interface LastNewsLayoutHOCProps extends LastNewsLayoutProps {
}

const LastNewsLayoutHOC: React.FC<LastNewsLayoutHOCProps> =
    (props) => <LastNewsLayout {...props}/>;

const mapStateToProps = ({lastNews}: any) =>
    ({
        lastNews: lastNews.value,
        error: lastNews.loadingError,
        status: lastNews.loadingStatus,
    });

const dispatchStateToProps = {
    loadLastNews,
    cleanStatus: cleanStatusOfLastNews,
};

export default connect(mapStateToProps, dispatchStateToProps)(LastNewsLayoutHOC);
