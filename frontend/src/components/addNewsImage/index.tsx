import React, {useEffect, useRef, useState} from 'react';
import style from './addNewsImage.module.scss';
import addImg from '../../assets/add.svg';

export interface AddNewsImageProps {
    img?: File
    setImg: (x: File) => void
    defaultImg?: string
}

const AddNewsImage: React.FC<AddNewsImageProps> =
    ({img, setImg, defaultImg}) => {
        const fileInputRef = useRef<HTMLInputElement>(null);
        const [imgString, setImgString] = useState<string | undefined>(defaultImg);

        useEffect(() => {
                if (img)
                    setImgString(URL.createObjectURL(img))
            },
            [img, setImgString])

        return (
            <div
                className={`${style.imageContainer} ${!(img || defaultImg) && style.error}`}
                style={{backgroundImage: `url(${imgString})`}}
            >
                <label htmlFor="file">
                    <img src={addImg} alt=""/>
                </label>
                <input
                    ref={fileInputRef}
                    type="file"
                    name="file" id="file"
                    accept=".jpg, .jpeg, .png, .svg, .gif"
                    onChange={() => {
                        if (!fileInputRef?.current?.files) return;
                        setImg(fileInputRef.current.files[0]);
                    }}
                />
            </div>
        );
    }

export default AddNewsImage;