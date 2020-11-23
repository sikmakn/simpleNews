import React, {useEffect} from 'react';
import styles from './fullNews.module.scss';
import DateString from '../dateString';
import Tag from '../tag';
import {TagEnum} from '../../types/tag';
import Loader from '../loader';
import fetchProcess from '../../types/fetching';

export interface FullNewsProps {
    status?: fetchProcess
    error?: string
    cleanStatus: () => void
    content?: {
        title: string
        text: string
        date: string
        tag: string
        imgSrc: string
    }
}

const FullNews: React.FC<FullNewsProps> =
    ({content, status, error, cleanStatus}) => {
        useEffect(() => cleanStatus, [cleanStatus]);
        return (
            <div className={styles.fullNewsContainer}>
                {status === fetchProcess.loading && <Loader size={400}/>}
                {error}
                {
                    content &&
                    <>
                        <div className={styles.infoContainer}>
                            <Tag type={content.tag as TagEnum}/>
                            <DateString date={content.date}/>
                        </div>
                        <h1>{content.title}</h1>
                        <img src={content.imgSrc} alt=""/>
                        <div className={styles.fullText}>{content.text}</div>
                    </>
                }
            </div>
        );
    }

export default FullNews;