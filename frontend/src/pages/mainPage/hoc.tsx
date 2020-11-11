import React from 'react';
import {connect} from 'react-redux';
import {loadBigNews, loadSmallNews} from '../../store/mainPage/actions';
import MainPage, {MainPageProps} from './index';

interface MainPageHOCProps extends MainPageProps{
    tag: string
    loadBigNews: any
    loadSmallNews: any
    bigNews?: any[]
    smallNews?: any[]
}

const MainPageHOC: React.FC<MainPageHOCProps> = (props) => <MainPage {...props}/>;


const mapStateToProps = ({mainPage}: any, ownProps: any) => {
    const {tag} = ownProps.match.params;
    return {tag, ...mainPage};
}

const mapDispatchToProps = {
    loadBigNews,
    loadSmallNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageHOC);