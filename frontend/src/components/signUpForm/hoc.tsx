import React from 'react';
import SignUpForm from './index';
import {connect} from 'react-redux';
import {registerNewUser} from '../../store/user/actions';

interface SignUpFormHOCProps {
    registerNewUser: (user: any) => void
}

const SignUpFormHOC: React.FC<SignUpFormHOCProps> =
    ({registerNewUser}) => (<SignUpForm registerNewUser={registerNewUser}/>);

const mapStateToProps = () => ({});

const mapDispatchToProps = {registerNewUser};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormHOC);