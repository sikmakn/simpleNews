import React, {useEffect, useState} from 'react';
import Form from '../form';
import styles from './signForm.module.scss';
import SignInFormHOC from '../sigInForm/hoc';
import SignSwitcher from '../signSwitcher';
import SignUpFormHOC from '../signUpForm/hoc';
import fetchProcess from '../../types/fetching';

export interface SignFormProps {
    hide: () => void;
    registrationStatus?: fetchProcess,
}

const SignForm: React.FC<SignFormProps> =
    ({hide, registrationStatus}) => {
        const [isSignUp, setSignUp] = useState(true);
        useEffect(() => {
            if (registrationStatus === fetchProcess.success) setSignUp(false);
        }, [registrationStatus]);
        return (
            <div
                className={styles.signBackground}
                onClick={hide}
            >
                <Form
                    className={styles.signForm}
                >
                    <SignSwitcher isSignUp={isSignUp} setIsSignUp={setSignUp}/>
                    {isSignUp ? <SignUpFormHOC/> : <SignInFormHOC/>}
                </Form>
            </div>
        );
    }

export default SignForm;