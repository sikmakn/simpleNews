import React from 'react';

export interface FormProps {
    className?: string
}

const Form: React.FC<FormProps> = ({className, children}) =>
    (<form
        onClick={e => {
            e.preventDefault();
            e.stopPropagation();
        }}
        className={className}
    >{children}</form>);
export default Form;