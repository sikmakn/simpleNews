import React from 'react';
import styles from './verticalStatistic.module.scss';
import Statistic from '../statistic';
import editImg from '../../assets/edit.svg';
import {Link} from 'react-router-dom';
import {editOneNewsPagePath} from '../../paths';

export interface VerticalStatisticProps {
    id?: string
    likesCount?: number
    commentsCount?: number
}

const VerticalStatistic: React.FC<VerticalStatisticProps> = (props) => (
    <div className={styles.statisticsContainer}>
        <Statistic {...props}/>
        {/*todo add check user*/}
        {props.id && <Link to={editOneNewsPagePath(props.id)}>
            <img
                src={editImg}
                className={styles.edit}
                alt=""
            />
        </Link>}
    </div>
);

export default VerticalStatistic;