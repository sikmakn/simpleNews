import React from 'react';
import styles from './horizontalStatistic.module.scss';
import Statistic, {StatisticProps} from '../statistic';

export interface HorizontalStatisticProps extends StatisticProps {
}

const HorizontalStatistic: React.FC<HorizontalStatisticProps> =
    (props) =>
        (<div className={styles.statistic}>
            <Statistic {...props}/>
        </div>);

export default HorizontalStatistic;