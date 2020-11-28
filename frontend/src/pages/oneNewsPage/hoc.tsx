import React from 'react';
import {connect} from 'react-redux';
import OneNewsPage, {OneNewsPageProps} from './index';
import {cleanOneNewsStatus, loadOneNews, setIdOfOneNews} from '../../store/oneNews/actions';

interface OneNewsPageHOCProps extends OneNewsPageProps {
}

const OneNewsPageHOC: React.FC<OneNewsPageHOCProps> = (props) =>
    <OneNewsPage {...props}/>;


const mapStateToProps = (state: any, ownProps: any) =>
    ({id: ownProps.match.params.id});


const mapDispatchToProps = {
    loadOneNews,
    setId: setIdOfOneNews,
    clanStatus: cleanOneNewsStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsPageHOC)