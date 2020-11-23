import React from 'react';
import {connect} from 'react-redux';
import OneNewsPage, {OneNewsPageProps} from './index';
import {loadOneNews} from '../../store/oneNews/actions';

interface OneNewsPageHOCProps extends OneNewsPageProps {
}

const OneNewsPageHOC: React.FC<OneNewsPageHOCProps> = (props) =>
        <OneNewsPage {...props}/>;


const mapStateToProps = (state: any, ownProps: any) =>
    ({id: ownProps.match.params.id});


const mapDispatchToProps = {loadOneNews};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsPageHOC)