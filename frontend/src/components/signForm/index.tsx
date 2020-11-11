import React, {useState} from 'react';
import styles from './signForm.module.scss';
import SignInFormHOC from '../sigInForm/hoc';
import SignSwitcher from '../signSwitcher';
import SignUpFormHOC from '../signUpForm/hoc';

export interface SignFormProps {
    hide: () => void;
}

const SignForm: React.FC<SignFormProps> = ({hide}) => {
    const [isSignUp, setSignUp] = useState(true);
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