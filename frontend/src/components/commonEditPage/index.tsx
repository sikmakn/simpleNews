import React, {useEffect, useState} from 'react';
import styles from './commonEditPage.module.scss';
import {TagEnum} from '../../types/tag';
import ButtonContainer from '../buttonContainer';
import TagSelect from '../tagSelect';
import AddNewsImage from '../addNewsImage';
import EditableDiv from '../editableDiv';
import HeaderHOC from '../header/hoc';

export interface CommonEditPageProps {
    oneNews?: {
        id: string
        img: string
        tag: string
        title: string
        text: string
    }
}

const CommonEditPage: React.FC<CommonEditPageProps> =
    ({oneNews = {id: '', img: '', tag: TagEnum.FINANCE, title: '', text: ''}}) => {
        const {id, img, tag, text, title} = oneNews;
        const [selectedTag, setSelectedTag] = useState(tag as TagEnum);
        const [selectedImg, setSelectedImg] = useState<File>();
        const [currentText, setCurrentText] = useState(text);

        useEffect(() => {
            if (img)
                fetch(img).then(e => e.blob())
                    .then(b => setSelectedImg(b as File));
        }, [img])

        return (
            <>
                <HeaderHOC/>
                <main className={styles.main}>
                    <TagSelect selected={selectedTag} setSelected={setSelectedTag}/>
                    <input type="text" value={title} placeholder={'Текст заголовка'}/>
                    <AddNewsImage img={selectedImg} setImg={setSelectedImg}/>
                    <EditableDiv
                        text={currentText} setText={setCurrentText}
                        placeholder={'Основной текст новости'}
                    />
                    <ButtonContainer addButtonName={'Сохранить новость'}/>
                </main>
            </>
        );
    };

export default CommonEditPage;