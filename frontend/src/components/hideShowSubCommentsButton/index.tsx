import React from 'react';
import styles from './hideShowSubCommentsButton.module.scss';
import upArrowImg from '../../assets/up-arrow.svg';
import downArrowImg from '../../assets/down-arrow.svg';

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
                        <img src={upArrowImg} alt=""/>
                        Скрыть все ответы
                    </>
                    : <>
                        <img src={downArrowImg} alt=""/>
                        Показать все ответы
                    </>
            }
            </span>
        );

export default HideShowSubCommentsButton;