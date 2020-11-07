import React, {useEffect, useRef} from 'react';
import styles from './editableDiv.module.scss';

export interface EditableDivProps {
    text?: string
    placeholder: string
    setText: (x: string) => void
}

const EditableDiv: React.FC<EditableDivProps> =
    ({text, setText, placeholder}) => {
        const divRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (divRef?.current)
                divRef.current.innerText = text || placeholder;
        }, [divRef]);

        return (
            <div
                ref={divRef}
                className={styles.textContainer}
                contentEditable={true}
                data-text={placeholder}
                defaultValue={placeholder}
                onBlur={() => {
                    if (!divRef?.current) return;

                    const text = divRef.current.innerText;
                    if (text && text !== '\n') return setText(text);

                    divRef.current.innerText = placeholder;
                }}
                onClick={() => {
                    if (!divRef?.current) return;

                    if (divRef.current.innerText === placeholder)
                        divRef.current.innerText = '';
                }}
            />
        );
    }

export default EditableDiv;