import React, {useEffect, useState} from 'react';
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
                <div
                    className={styles.signForm}
                    onClick={e => e.stopPropagation()}
                >
                    <SignSwitcher isSignUp={isSignUp} setIsSignUp={setSignUp}/>
                    {isSignUp ? <SignUpFormHOC/> : <SignInFormHOC/>}
                </div>
            </div>
        );
    }

export default SignForm;