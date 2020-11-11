import React from 'react';
import CheckInput, {ValueObj} from '../checkInput';

const NAME_REGEX = /^[а-яА-Я]{3,20}$/;

export interface LastNameInputProps {
    className?: string
    valueObj?: ValueObj
    setValueObj: (x: ValueObj) => void
}

const LastNameInput: React.FC<LastNameInputProps> =
    (props) => (
        <CheckInput
            placeholder="Фамилия"
            errorsText={[
                'Фамилия может содержать от 3 до 20 символов',
                'Фамилия может состоять только из букв кирилицы'
            ]}
            {...props}
            regExp={NAME_REGEX}
        />
    );

export default LastNameInput;