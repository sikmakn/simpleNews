import React from 'react';
import LogOutButton, {LogOutButtonProps} from './index';
import {connect} from 'react-redux';
import {logOutUser} from '../../store/user/actions';

interface LogOutButtonHOCProps extends LogOutButtonProps {
}

const LogOutButtonHOC: React.FC<LogOutButtonHOCProps> = ({logOutUser}) =>
    <LogOutButton logOutUser={logOutUser}/>;

const mapStateToProps = ({}: any) => ({});

const mapDispatchToProps = {logOutUser};

export default connect(mapStateToProps, mapDispatchToProps)(LogOutButtonHOC);