import React from 'react';
import styles from './buttonContainer.module.scss';

export interface ButtonContainerProps {
    addButtonName: string
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({addButtonName}) =>
    (<div className={styles.buttonContainer}>
        <button>Отмена</button>
        <button className={styles.addButton}>{addButtonName}</button>
    </div>);

export default ButtonContainer;