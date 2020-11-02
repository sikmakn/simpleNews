import React from 'react';
import styles from './fullNews.module.scss';
import Date from '../date';
import Tag from '../tag';
import {TagEnum} from '../../types/tag';
import OneNewsCommentsContainer from "../oneNewsCommentsContainer";

export interface FullNewsProps {
    id: string
    title: string
    text: string
    date: Date
    tag: string
    img: string
}

const FullNews: React.FC<FullNewsProps> =
    ({id, title, text, date, tag, img}) =>
        (<div className={styles.fullNewsContainer}>
            <div className={styles.infoContainer}>
                <Tag type={tag as TagEnum}/>
                <Date date={date}/>
            </div>
            <h1>{title}</h1>
            <img src={img} alt=""/>
            <div className={styles.fullText}>{text}</div>
            <OneNewsCommentsContainer/>
        </div>);

export default FullNews;