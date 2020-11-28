import React from 'react';
import {ValueObj} from '../checkInput';
import ErrorMessage from '../errorMessage';

interface FormCheckErrorsProps {
    valueObj?: ValueObj
}

const FormCheckErrors: React.FC<FormCheckErrorsProps> = ({valueObj}) =>
    (<>
        {valueObj?.errors?.map((err, i) =>
            <ErrorMessage message={err} key={i}/>)}
    </>);

export default FormCheckErrors;