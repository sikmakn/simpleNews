import React from 'react';
import styles from './fullNews.module.scss';
import Date from '../date';
import Tag from '../tag';
import {TagEnum} from '../../types/tag';
import Loader from '../loader';
import fetchProcess from '../../types/fetching';

export interface FullNewsProps {
    status?: fetchProcess
    error?: string
    content?: {
        title: string
        text: string
        date: Date
        tag: string
        imgSrc: string
    }
}

const FullNews: React.FC<FullNewsProps> =
    ({content, status, error}) =>
        (<div className={styles.fullNewsContainer}>
            {status === fetchProcess.loading && <Loader size={400}/>}
            {error}
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
        </div>);

export default FullNews;