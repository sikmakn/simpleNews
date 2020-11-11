import React from 'react';
import CheckInput, {ValueObj} from '../checkInput';

const NAME_REGEX = /^[а-яА-Я]{3,20}$/;

export interface FirstNameInputProps {
    className?: string
    valueObj?: ValueObj
    setValueObj: (x: ValueObj) => void
}

const FirstNameInput: React.FC<FirstNameInputProps> =
    (props) => (
        <CheckInput
            placeholder="Имя"
            errorsText={[
                'Имя может содержать от 3 до 20 символов',
                'Имя может состоять только из букв кирилицы'
            ]}
            {...props}
            regExp={NAME_REGEX}
        />
    );

export default FirstNameInput;