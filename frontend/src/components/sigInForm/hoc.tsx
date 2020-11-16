import React from 'react';
import SignInForm, {SignInFormProps} from './index';
import {connect} from 'react-redux';
import {signInUser} from '../../store/user/actions';

interface SignInFormHOCProps extends SignInFormProps {
}

const SigInFormHOC: React.FC<SignInFormHOCProps> = (props) =>
    <SignInForm {...props}/>;

const mapStateToProps = ({user}: any) =>
    ({
        status: user.loginProcessStatus,
        errors: user.loginErrors
    });

const mapDispatchToProps = {signInUser};

export default connect(mapStateToProps, mapDispatchToProps)(SigInFormHOC);