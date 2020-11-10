import React, {useState} from 'react';
import styles from './signForm.module.scss';
import SignInForm from '../sigInForm';
import SignSwitcher from '../signSwitcher';
import SignUpFormHOC from '../signUpFormHOC';

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
                {isSignUp ? <SignUpFormHOC/> : <SignInForm/>}
            </div>
        </div>
    );
}

export default SignForm;