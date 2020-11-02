import React from 'react';
import styles from './hideShowSubCommentsButton.module.scss';

export interface HideShowSubCommentsButtonProps {
    visible: boolean
    setVisible: (x: boolean) => void
}

const HideShowSubCommentsButton: React.FC<HideShowSubCommentsButtonProps> =
    ({visible, setVisible}) =>
        (
            <span className={styles.hideShow} onClick={() => setVisible(!visible)}>
            {
                visible ?
                    <>
                        <img src={process.env.PUBLIC_URL + '/up-arrow.svg'} alt=""/>
                        Скрыть все ответы
                    </>
                    : <>
                        <img src={process.env.PUBLIC_URL + '/down-arrow.svg'} alt=""/>
                        Показать все ответы
                    </>
            }
            </span>
        );

export default HideShowSubCommentsButton;