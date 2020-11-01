import React from 'react';
import {Link} from 'react-router-dom';
import Tag from '../tag';
import Statistic from '../statistic';
import styles from './smallNewsCard.module.scss';
import {TagEnum} from "../../types/tag";

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
            <Statistic {...statistic}/>
        </div>);

export default SmallNewsCard;