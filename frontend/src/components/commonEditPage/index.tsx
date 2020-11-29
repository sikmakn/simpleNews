import React, {useEffect, useState} from 'react';
import {oneNewsPagePath} from '../../paths';
import fetchProcess from '../../types/fetching';
import {TagEnum} from '../../types/tag';
import AddNewsImage from '../addNewsImage';
import ButtonContainer from '../buttonContainer';
import EditableDiv from '../editableDiv';
import ErrorMessage from '../errorMessage';
import ErrorLayout from '../errorsLayout';
import HeaderHOC from '../header/hoc';
import Loader from '../loader';
import TagSelect from '../tagSelect';
import styles from './commonEditPage.module.scss';
import {Redirect} from 'react-router-dom';

export interface CommonEditPageProps {
    oneNewsId?: string
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
    error?: string
    status?: fetchProcess
    cleanStatus: () => void
}

const CommonEditPage: React.FC<CommonEditPageProps> =
    ({
         oneNews = {imgSrc: '', tag: TagEnum.FINANCE, title: '', text: ''},
         save, cancel, error, status, cleanStatus, oneNewsId
     }) => {
        const {imgSrc: defaultImg, tag: defaultTag, text: defaultText, title: defaultTitle} = oneNews;
        const [title, setTitle] = useState(defaultTitle)
        const [tag, setTag] = useState(defaultTag as TagEnum);
        const [img, setImg] = useState<File>();
        const [text, setText] = useState(defaultText);

        useEffect(() => cleanStatus, [cleanStatus]);

        if (status === fetchProcess.success && oneNewsId)
            return <Redirect to={oneNewsPagePath(oneNewsId)}/>;

        return (
            <>
                <HeaderHOC/>
                <main className={styles.main}>
                    <TagSelect selected={tag} setSelected={setTag}/>
                    {status === fetchProcess.loading && <Loader size={40}/>}
                    {error && <ErrorLayout>
                        <ErrorMessage message={error}/>
                    </ErrorLayout>}
                    <input
                        type="text" placeholder="Текст заголовка"
                        value={title}
                        onChange={e => setTitle(e.currentTarget.value)}
                    />
                    <AddNewsImage img={img} setImg={setImg} defaultImg={defaultImg}/>
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
                            if (img || defaultImg)
                                save({text, img:img!, title, tag});
                        }}
                    />
                </main>
            </>
        );
    };

export default CommonEditPage;