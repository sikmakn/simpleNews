import React from 'react';
import {Link} from 'react-router-dom';
import styles from './bigNewsCard.module.scss';
import Tag from '../tag';
import Date from '../date';
import {TagEnum} from '../../types/tag';
import HorizontalStatistic from '../horizontalStatistic';

export interface BigNewsCardProps {
    id: string
    img: string
    tag: string
    date: Date
    title: string
    description: string
    statistic: {
        likesCount: number
        commentsCount: number
    }
}

const BigNewsCard: React.FC<BigNewsCardProps> =
    ({id, img, tag, date, title, description, statistic}) => (
        <div className={styles.bigNewsContainer}>
            <Link to={`news/${id}`} className={styles.newsLink}>
                <img src={img} alt=""/>
            </Link>
            <div className={styles.infoContainer}>
                <Tag type={tag as TagEnum}/>
                <Date date={date}/>
                <HorizontalStatistic {...statistic}/>
            </div>
            <Link to={`news/${id}`} className={styles.newsLink}>
                <h1>{title}</h1>
                <p>{description}</p>
            </Link>
        </div>
    );

export default BigNewsCard;