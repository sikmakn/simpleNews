import React from 'react';
import AddOneNewsPage from './index';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

interface AddOneNewsPageHOCProps {
    user?: any
}

const AddOneNewsPageHOC: React.FC<AddOneNewsPageHOCProps> = ({user}) =>
    user ? <AddOneNewsPage/> : <Redirect to="/404"/>;


const mapStateToProps = ({user}: any) => ({user: user.value});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddOneNewsPageHOC);