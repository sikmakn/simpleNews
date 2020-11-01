import React from 'react';
import {Link} from 'react-router-dom';
import styles from './bigNewsCard.module.scss';
import Tag, {TagName} from '../tag';
import Date from '../date';
import Statistic from '../statistic';

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
            <Link to={`news/${id}`}>
                <img src={img} alt=""/>
            </Link>
            <div className="info-container">
                <Tag name={tag as TagName}/>
                <Date date={date}/>
                <Statistic {...statistic}/>
            </div>
            <Link to={`news/${id}`}>
                <h1>{title}</h1>
                <p>{description}</p>
            </Link>
        </div>
    );

export default BigNewsCard;