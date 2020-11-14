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
        imgSrc: string
        tag: string
        title: string
        text: string
    }
    save: (oneNews: {
        img: File
        tag: string
        title: string
        text: string
    }) => void,
    cancel: () => void,
}

const CommonEditPage: React.FC<CommonEditPageProps> =
    ({
         oneNews = {imgSrc: '', tag: TagEnum.FINANCE, title: '', text: ''},
         save, cancel
     }) => {
        const {imgSrc: defaultImg, tag: defaultTag, text: defaultText, title: defaultTitle} = oneNews;
        const [title, setTitle] = useState(defaultTitle)
        const [tag, setTag] = useState(defaultTag as TagEnum);
        const [img, setImg] = useState<File>();
        const [text, setText] = useState(defaultText);

        useEffect(() => {
            if (defaultImg)
                fetch(defaultImg).then(e => e.blob())
                    .then(b => setImg(b as File));
        }, [defaultImg])

        return (
            <>
                <HeaderHOC/>
                <main className={styles.main}>
                    <TagSelect selected={tag} setSelected={setTag}/>
                    <input
                        type="text" placeholder="Текст заголовка"
                        value={title}
                        onChange={e => setTitle(e.currentTarget.value)}
                    />
                    <AddNewsImage img={img} setImg={setImg}/>
                    <EditableDiv
                        text={text} setText={setText}
                        placeholder="Основной текст новости"
                    />
                    <ButtonContainer
                        addButtonName="Сохранить новость"
                        onClickToCancel={() => {
                            setImg(undefined);
                            setText('');
                            cancel();
                        }}
                        onClickToAdd={() => {
                            if (img)
                                save({text, img, title, tag});
                        }}
                    />
                </main>
            </>
        );
    };

export default CommonEditPage;