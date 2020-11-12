import React, {MouseEventHandler} from 'react';
import styles from './buttonContainer.module.scss';

export interface ButtonContainerProps {
    addButtonName: string
    onClickToAdd: MouseEventHandler<HTMLButtonElement>
    onClickToCancel: MouseEventHandler<HTMLButtonElement>
}

const ButtonContainer: React.FC<ButtonContainerProps> =
    ({addButtonName, onClickToAdd, onClickToCancel}) =>
        (<div className={styles.buttonContainer}>
            <button
                onClick={onClickToCancel}
            >
                Отмена
            </button>
            <button
                className={styles.addButton}
                onClick={onClickToAdd}
            >
                {addButtonName}
            </button>
        </div>);

export default ButtonContainer;