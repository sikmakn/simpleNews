import React from 'react';
import {Link} from 'react-router-dom';
import Tag from '../tag';
import styles from './hotNewsCard.module.scss';
import {TagEnum} from '../../types/tag';
import {oneNewsPagePath} from '../../paths';
import HotNewsStatisticHOC from '../hotNewsStatistic/hoc';

export interface HotNewsCardProps {
    id: string
    imgSrc: string
    tag: string
    title: string
}

const HotNewsCard: React.FC<HotNewsCardProps> =
    ({id, imgSrc, tag, title}) => {
        const oneNewsPath = oneNewsPagePath(id);
        return (
            <div className={styles.smallNewsContainer}>
                <Link to={oneNewsPath}>
                    <img src={imgSrc} alt=""/>
                </Link>
                <div className={styles.tagContainer}>
                    <Tag type={tag as TagEnum}/>
                </div>
                <Link to={oneNewsPath} className={styles.title}>
                    <h2>{title}</h2>
                </Link>
                <HotNewsStatisticHOC id={id}/>
            </div>);
    }

export default HotNewsCard;