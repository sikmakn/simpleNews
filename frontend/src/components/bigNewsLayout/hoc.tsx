import React from 'react';
import {connect} from 'react-redux';
import {loadBigNews} from '../../store/bigNews/actions';
import BigNewsLayout, {BigNewsLayoutProps} from './index';

interface BigNewsLayoutHOCProps extends BigNewsLayoutProps {
}

const BigNewsLayoutHOC: React.FC<BigNewsLayoutHOCProps> = (props) =>
    <BigNewsLayout {...props}/>;

const mapStateToProps = ({bigNews, tag}: any) => ({
    tag: tag.value,
    bigNews: bigNews.value,
});

const mapDispatchToProps = {loadBigNews};

export default connect(mapStateToProps, mapDispatchToProps)(BigNewsLayoutHOC);