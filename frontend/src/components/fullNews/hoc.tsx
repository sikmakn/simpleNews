import React from 'react';
import FullNews, {FullNewsProps} from './index';
import {connect} from 'react-redux';
import {cleanOneNewsStatus} from '../../store/oneNews/actions';

interface FullNewsHOCProps extends FullNewsProps {
}

const FullNewsHOC: React.FC<FullNewsHOCProps> = (props) =>
    <FullNews {...props}/>;

const mapStateToProps = ({oneNews}: any) =>
    ({
        content: oneNews.value,
        status: oneNews.loadingStatus,
        error: oneNews.loadingError,
    });

const mapDispatchToProps = {cleanStatus:cleanOneNewsStatus};

export default connect(mapStateToProps, mapDispatchToProps)(FullNewsHOC);