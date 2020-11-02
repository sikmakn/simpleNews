import React from 'react';
import {Link} from 'react-router-dom';
import Tag from '../tag';
import styles from './smallNewsCard.module.scss';
import {TagEnum} from '../../types/tag';
import HorizontalStatistic from '../horizontalStatistic';

export interface SmallNewsCardProps {
    id: string
    img: string
    tag: string
    title: string
    statistic: {
        likesCount: number
        commentsCount: number
    }
}

const SmallNewsCard: React.FC<SmallNewsCardProps> =
    ({id, img, tag, title, statistic}) =>
        (<div className={styles.smallNewsContainer}>
            <Link to={`news/${id}`}>
                <img src={img} alt=""/>
            </Link>
            <div className={styles.tagContainer}>
                <Tag type={tag as TagEnum}/>
            </div>
            <Link to={`news/${id}`} className={styles.title}>
                <h2>{title}</h2>
            </Link>
            <HorizontalStatistic {...statistic}/>
        </div>);

export default SmallNewsCard;