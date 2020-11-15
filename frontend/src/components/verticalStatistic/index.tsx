import React from 'react';
import styles from './verticalStatistic.module.scss';
import editImg from '../../assets/edit.svg';
import {Link} from 'react-router-dom';
import {editOneNewsPagePath} from '../../paths';
import Loader from '../loader';
import OneNewsStatisticHOC from '../oneNewsStatistic/hoc';

export interface VerticalStatisticProps {
    id?: string
    authorUsername?: string
    username?: string
}

const VerticalStatistic: React.FC<VerticalStatisticProps> =
    ({id, authorUsername, username}) => {
        if (!id) return <Loader size={50}/>;
        return (
            <div className={styles.statisticsContainer}>
                <OneNewsStatisticHOC id={id}/>
                {
                    id && authorUsername === username &&
                    <Link to={editOneNewsPagePath(id)}>
                        <img src={editImg} className={styles.edit} alt=""/>
                    </Link>
                }
            </div>
        );
    }

export default VerticalStatistic;