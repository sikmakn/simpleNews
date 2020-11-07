import React, {useState} from 'react';
import signIcon from '../../assets/signIcon.svg';
import styles from './signButton.module.scss';
import SignForm from '../signForm';

const SignButton: React.FC = () => {
    const [isSignForm, setIsSignForm] = useState(false);
    return (
        <>
            <img
                onClick={() => setIsSignForm(true)}
                className={styles.icon}
                src={signIcon} alt="Войти"
            />
            {isSignForm && <SignForm hide={() => setIsSignForm(false)}/>}
        </>);
}

export default SignButton;