import React from 'react';
import {connect} from 'react-redux';
import {loadBigNews, loadLastNews, loadSmallNews} from '../../store/mainPage/actions';
import MainPage from './index';

interface MainPageHOCProps {
    tag: string
    loadBigNews: any
    loadSmallNews: any
    loadLastNews: any
    bigNews?: any[]
    smallNews?: any[]
    lastNews?: any[]
}

const MainPageHOC: React.FC<MainPageHOCProps> = (props) => {
    return <MainPage {...props}/>;
}

const mapStateToProps = ({mainPage}: any, ownProps: any) => {
    const {tag} = ownProps.match.params;
    return {tag, ...mainPage};
}

const mapDispatchToProps = {
    loadBigNews,
    loadSmallNews,
    loadLastNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageHOC);