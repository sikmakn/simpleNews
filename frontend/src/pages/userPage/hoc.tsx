import React from 'react';
import UserPage, {UserPageProps} from './index';
import {mainPagePath} from '../../paths';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

interface UserPageHOCProps {
    user: UserPageProps
}

const UserPageHOC: React.FC<UserPageHOCProps> = ({user}) =>
    user ? <UserPage {...user}/> : <Redirect to={mainPagePath()}/>;

const mapStateToProps = ({user}: any) => ({user: user.value});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageHOC);