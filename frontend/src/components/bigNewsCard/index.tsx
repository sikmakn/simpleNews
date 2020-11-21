import React from 'react';
import {Link} from 'react-router-dom';
import styles from './bigNewsCard.module.scss';
import Tag from '../tag';
import DateString from '../dateString';
import {TagEnum} from '../../types/tag';
import {oneNewsPagePath} from '../../paths';
import BigNewsStatisticHOC from '../bigNewsStatitstic/hoc';

export interface BigNewsCardProps {
    id: string
    imgSrc: string
    tag: string
    date: string
    title: string
    description: string
}

const BigNewsCard: React.FC<BigNewsCardProps> =
    ({
         id,
         imgSrc,
         tag,
         date,
         title,
         description
     }) => {
        const oneNewsPath = oneNewsPagePath(id);
        return (
            <div className={styles.bigNewsContainer}>
                <Link to={oneNewsPath} className={styles.newsLink}>
                    <img src={imgSrc} alt=""/>
                </Link>
                <div className={styles.infoContainer}>
                    <Tag type={tag as TagEnum}/>
                    <DateString date={date}/>
                    <BigNewsStatisticHOC id={id}/>
                </div>
                <Link to={oneNewsPath} className={styles.newsLink}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Link>
            </div>
        );
    }

export default BigNewsCard;