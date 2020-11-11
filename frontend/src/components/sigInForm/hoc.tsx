import React from 'react';
import SignInForm from './index';
import {connect} from 'react-redux';
import {signInUser} from '../../store/user/actions';

interface SignInFormHOCProps {
    signInUser: (x: any) => void
}

const SigInFormHOC: React.FC<SignInFormHOCProps> =
    ({signInUser}) => <SignInForm signInUser={signInUser}/>;

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    signInUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SigInFormHOC);