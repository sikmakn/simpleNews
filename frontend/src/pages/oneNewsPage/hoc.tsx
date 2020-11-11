import React from 'react';
import {connect} from 'react-redux';
import OneNewsPage from './index';
import {loadLastNews} from '../../store/mainPage/actions';
import {loadOneNews} from '../../store/oneNews/actions';

interface OneNewsPageHOCProps {
    id: string
    lastNews?: any[]
    loadLastNews: () => void
    oneNews?: any
    loadOneNews: (id: string) => void
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

const mapDispatchToProps = {
    loadOneNews,
    loadLastNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsPageHOC)