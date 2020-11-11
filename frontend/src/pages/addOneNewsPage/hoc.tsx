import React from 'react';
import AddOneNewsPage from './index';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {noMatchPagePath} from '../../paths';

interface AddOneNewsPageHOCProps {
    user?: any
}

const AddOneNewsPageHOC: React.FC<AddOneNewsPageHOCProps> = ({user}) =>
    user ? <AddOneNewsPage/> : <Redirect to={noMatchPagePath()}/>;


const mapStateToProps = ({user}: any) => ({user: user.value});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddOneNewsPageHOC);