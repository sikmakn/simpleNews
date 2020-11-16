import React from 'react';
import SignUpForm, {SignUpFormProps} from './index';
import {connect} from 'react-redux';
import {registerNewUser} from '../../store/user/actions';

interface SignUpFormHOCProps extends SignUpFormProps {
}

const SignUpFormHOC: React.FC<SignUpFormHOCProps> =
    (props) => <SignUpForm {...props}/>;

const mapStateToProps = ({user}: any) => ({
    status: user.registraionStatus,
    errors: user.registrationErrors,
});

const mapDispatchToProps = {registerNewUser};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormHOC);