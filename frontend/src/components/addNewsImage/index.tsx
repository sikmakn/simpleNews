import React, {useRef} from 'react';
import style from './addNewsImage.module.scss';
import addImg from '../../assets/add.svg';

export interface AddNewsImageProps {
    img?: File
    setImg: (x: File) => void
}

const AddNewsImage: React.FC<AddNewsImageProps> =
    ({img, setImg}) => {
        const fileInputRef = useRef<HTMLInputElement>(null);
        return (
            <div
                className={`${style.imageContainer} ${!img && style.error}`}
                style={{backgroundImage: `url(${img && URL.createObjectURL(img)})`}}
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