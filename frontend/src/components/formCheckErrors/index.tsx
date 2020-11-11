import React from 'react';
import {ValueObj} from '../checkInput';
import styles from './formCheckErrors.module.scss';

interface FormCheckErrorsProps {
    valueObj?: ValueObj
}

const FormCheckErrors: React.FC<FormCheckErrorsProps> = ({valueObj}) =>
    (
        <>
            {
                valueObj?.errors?.map((err, i) =>
                <span key={i} className={styles.error}>{err}</span>)
            }
        </>
    );

export default FormCheckErrors;