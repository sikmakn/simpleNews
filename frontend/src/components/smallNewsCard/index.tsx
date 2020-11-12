import React from 'react';
import {Link} from 'react-router-dom';
import Tag from '../tag';
import styles from './smallNewsCard.module.scss';
import {TagEnum} from '../../types/tag';
import HorizontalStatistic from '../horizontalStatistic';
import {oneNewsPagePath} from '../../paths';

export interface SmallNewsCardProps {
    id: string
    img: string
    tag: string
    title: string
    statistic: {
        likesCount: number
        commentsCount: number
    }
    userStatistic?: {
        isLiked?: boolean
        isCommented?: boolean
    }
}

const SmallNewsCard: React.FC<SmallNewsCardProps> =
    ({id, img, tag, title, ...fullStatistic}) => {
        const oneNewsPath = oneNewsPagePath(id);
        return (
            <div className={styles.smallNewsContainer}>
                <Link to={oneNewsPath}>
                    <img src={img} alt=""/>
                </Link>
                <div className={styles.tagContainer}>
                    <Tag type={tag as TagEnum}/>
                </div>
                <Link to={oneNewsPath} className={styles.title}>
                    <h2>{title}</h2>
                </Link>
                <HorizontalStatistic {...fullStatistic}/>
            </div>);
    }

export default SmallNewsCard;