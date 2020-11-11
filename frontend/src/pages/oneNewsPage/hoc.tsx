import React from 'react';
import {connect} from 'react-redux';
import OneNewsPage, {OneNewsPageProps} from './index';
import {loadOneNews} from '../../store/oneNews/actions';

interface OneNewsPageHOCProps extends OneNewsPageProps {
}

const OneNewsPageHOC: React.FC<OneNewsPageHOCProps> =
    (props) => <OneNewsPage {...props}/>;

const mapStateToProps = ({oneNews, lastNews}: any, ownProps: any) => {
    const {id} = ownProps.match.params;
    return {
        id,
        lastNews: lastNews.value,
        oneNews: oneNews.value
    };
};

const mapDispatchToProps = {loadOneNews};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsPageHOC)