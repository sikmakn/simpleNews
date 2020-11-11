import React from 'react';
import {connect} from 'react-redux';
import OneNewsPage, {OneNewsPageProps} from './index';
import {loadOneNews} from '../../store/oneNews/actions';

interface OneNewsPageHOCProps extends OneNewsPageProps {
}

const OneNewsPageHOC: React.FC<OneNewsPageHOCProps> =
    (props) => <OneNewsPage {...props}/>;

const mapStateToProps = ({oneNews, mainPage}: any, ownProps: any) => {
    const {id} = ownProps.match.params;
    return {
        id,
        lastNews: mainPage.lastNews,
        oneNews: Object.keys(oneNews).length && oneNews
    };
};

const mapDispatchToProps = {loadOneNews};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsPageHOC)