import React from 'react';
import CheckInput, {ValueObj} from '../checkInput';

const USERNAME_REGEX = /^[a-zA-Z0-9]{4,20}$/;

export interface UsernameInputProps {
    className?: string
    valueObj?: ValueObj
    setValueObj: (x: ValueObj) => void
}

const UsernameInput: React.FC<UsernameInputProps> =
    (props) => (
        <CheckInput
            placeholder="Логин"
            errorsText={[
                'Логин должен от 4 до 20 символов',
                'Логин содержать только латинские буквы и цифры'
            ]}
            {...props}
            regExp={USERNAME_REGEX}
        />
    );

export default UsernameInput;