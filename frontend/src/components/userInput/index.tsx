import React, {ChangeEventHandler, LegacyRef} from 'react';
import styles from './userInput.module.scss';

export interface UserInputProps {
    placeholder: string
    inputRef?: LegacyRef<HTMLInputElement>
    type?: string
    className?: string
    disabled?: boolean
    value?: string | ReadonlyArray<string> | number
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const UserInput: React.FC<UserInputProps> =
    ({
         placeholder,
         inputRef,
         type = 'text',
         className = '',
         disabled = false,
         value,
         onChange
     }) =>
        (<input
            ref={inputRef}
            onChange={onChange}
            className={`${styles.input} ${className}`}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
        />);

export default UserInput;