import React from 'react';
import styles from './fullNews.module.scss';
import Date from '../date';
import Tag from '../tag';
import {TagEnum} from '../../types/tag';
import OneNewsCommentsContainer from '../oneNewsCommentsContainer';

export interface FullNewsProps {
    content?: {
        title: string
        text: string
        date: Date
        tag: string
        imgSrc: string
    }
}

const FullNews: React.FC<FullNewsProps> =
    ({content}) =>
        (<div className={styles.fullNewsContainer}>
            {
                content &&
                <>
                    <div className={styles.infoContainer}>
                        <Tag type={content.tag as TagEnum}/>
                        <Date date={content.date}/>
                    </div>
                    <h1>{content.title}</h1>
                    <img src={content.imgSrc} alt=""/>
                    <div className={styles.fullText}>{content.text}</div>
                </>
            }
            <OneNewsCommentsContainer/>
        </div>);

export default FullNews;