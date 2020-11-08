import React, {LegacyRef} from 'react';
import styles from './userInput.module.scss';

export interface UserInput {
    placeholder: string
    inputRef?: LegacyRef<HTMLInputElement>
    type?: string
    className?: string
    disabled?: boolean
    value?:string | ReadonlyArray<string> | number
}

const UserInput: React.FC<UserInput> =
    ({
         placeholder,
         inputRef,
         type = 'text',
         className = '',
         disabled = false,
         value
     }) =>
        (<input
            ref={inputRef}
            className={`${styles.input} ${className}`}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
        />);

export default UserInput;