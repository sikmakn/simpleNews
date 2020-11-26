import React from 'react';
import styles from './verticalStatistic.module.scss';
import editImg from '../../assets/edit.svg';
import {Link} from 'react-router-dom';
import {editOneNewsPagePath} from '../../paths';
import Loader from '../loader';
import OneNewsStatisticHOC from '../oneNewsStatistic/hoc';
import fetchProcess from "../../types/fetching";

export interface VerticalStatisticProps {
    id?: string
    authorUsername?: string
    username?: string
    status?: fetchProcess
}

const VerticalStatistic: React.FC<VerticalStatisticProps> =
    ({
         id,
         authorUsername,
         username,
         status
     }) => {
        if (!id ||status === fetchProcess.loading) return <Loader size={50}/>;
        return (
            <div className={styles.statisticsContainer}>
                <OneNewsStatisticHOC/>
                {
                    authorUsername === username &&
                    <Link to={editOneNewsPagePath(id)}>
                        <img src={editImg} className={styles.edit} alt=""/>
                    </Link>
                }
            </div>
        );
    }

export default VerticalStatistic;