import React from 'react';
import SignForm, {SignFormProps} from './index';
import {connect} from 'react-redux';

interface SignFormHOCProps extends SignFormProps {
}

const SignFormHOC: React.FC<SignFormHOCProps> =
    (props) => <SignForm {...props}/>;

const mapStateToProps = ({user}: any) =>
    ({registrationStatus: user.registrationStatus});


const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignFormHOC);