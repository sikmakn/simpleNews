import React from 'react';
import styles from './checkInput.module.scss';
import UserInput from '../userInput';

export interface ValueObj {
    value: string,
    errors?: string[]
}

export interface CheckInputProps {
    placeholder: string
    valueObj?: ValueObj
    setValueObj: (x: ValueObj) => void
    regExp: RegExp
    errorsText: string[]
    className?: string
    type?: string
}

const CheckInput: React.FC<CheckInputProps> =
    ({
         valueObj,
         placeholder,
         regExp,
         setValueObj,
         errorsText,
         type,
         className = ''
     }) =>
        (<UserInput
            className={`${valueObj?.errors ? styles.error : ''} ${className} `}
            placeholder={placeholder}
            value={valueObj?.value ?? ''}
            type={type}
            onChange={event => {
                const value = event.target.value ?? '';
                if (value.match(regExp))
                    return setValueObj({value})
                setValueObj({value, errors: errorsText});
            }}
        />);

export default CheckInput;