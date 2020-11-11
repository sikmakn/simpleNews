import React from 'react';
import CheckInput, {ValueObj} from '../checkInput';

const PASSWORD_REGEX = /^.{6,20}$/;

export interface PasswordInputProps {
    placeholder?: string
    className?:string
    valueObj?: ValueObj
    setValueObj: (x: ValueObj) => void
}

const PasswordInput: React.FC<PasswordInputProps> =
    ({placeholder = "Пароль", className,...checkInputProps}) => (
        <CheckInput
            placeholder={placeholder}
            errorsText={[
                'Пароль должен быть длиннее 6 и короче 20 символов'
            ]}
            type="password"
            {...checkInputProps}
            className={className}
            regExp={PASSWORD_REGEX}
        />
    );

export default PasswordInput;