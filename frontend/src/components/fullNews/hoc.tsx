import React from 'react';
import FullNews, {FullNewsProps} from './index';
import {connect} from 'react-redux';

interface FullNewsHOCProps extends FullNewsProps {
}

const FullNewsHOC: React.FC<FullNewsHOCProps> = (props) =>
    <FullNews {...props}/>;

const mapStateToProps = ({oneNews}: any): FullNewsProps =>
    ({content: oneNews.value});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FullNewsHOC);