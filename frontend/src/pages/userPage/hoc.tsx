import React from 'react';
import UserPage, {UserPageProps} from './index';
import {mainPagePath} from '../../paths';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUserData} from '../../store/user/actions';

interface UserPageHOCProps extends UserPageProps{
}

const UserPageHOC: React.FC<UserPageHOCProps> = (props) =>
    props.user ? <UserPage {...props}/> : <Redirect to={mainPagePath()}/>;

const mapStateToProps = ({user}: any) => ({
    user: user.value,
    status: user.updateProcessStatus,
    error: user.updateError
});

const mapDispatchToProps = {updateUserData};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageHOC);