import React, {useState} from 'react';
import styles from './signForm.module.scss';
import SignUpForm from '../signUpForm';
import SignInForm from '../sigInForm';
import SignSwitcher from "../signSwitcher";

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
                {isSignUp ? <SignUpForm/> : <SignInForm/>}
            </div>
        </div>
    );
}

export default SignForm;