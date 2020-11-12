import React from 'react';
import {Link} from 'react-router-dom';
import styles from './bigNewsCard.module.scss';
import Tag from '../tag';
import Date from '../date';
import {TagEnum} from '../../types/tag';
import HorizontalStatistic from '../horizontalStatistic';
import {oneNewsPagePath} from '../../paths';

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
    userStatistic?: {
        isLiked?: boolean
        isCommented?: boolean
    }
}

const BigNewsCard: React.FC<BigNewsCardProps> =
    ({
         id,
         img,
         tag,
         date,
         title,
         description,
         ...statisticFull
     }) => {
        const oneNewsPath = oneNewsPagePath(id);
        return (
            <div className={styles.bigNewsContainer}>
                <Link to={oneNewsPath} className={styles.newsLink}>
                    <img src={img} alt=""/>
                </Link>
                <div className={styles.infoContainer}>
                    <Tag type={tag as TagEnum}/>
                    <Date date={date}/>
                    <HorizontalStatistic {...statisticFull}/>
                </div>
                <Link to={oneNewsPath} className={styles.newsLink}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Link>
            </div>
        );
    }

export default BigNewsCard;