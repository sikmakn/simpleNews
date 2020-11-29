import React, {useEffect, useRef, useState} from 'react';
import imgToString from '../../helpers/imgToString';
import styles from './addUserImage.module.scss';
import defaultUserImg from '../../assets/no-image.png';

export interface AddUserImageProps {
    defaultSrc?: string
    img?: File
    setImg: (x: File) => void
}

const AddUserImage: React.FC<AddUserImageProps> = ({defaultSrc, setImg, img}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imgString, setImgString] = useState(defaultSrc);
    console.log(imgString)
    useEffect(() => {
            if (img) setImgString(imgToString(img))
        },
        [img, setImgString]
    );
    return (
        <label htmlFor="file">
            <div
                className={styles.imageContainer}
                style={{backgroundImage: `url(${imgString || defaultUserImg})`}}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    name="file" id="file"
                    accept=".jpg, .jpeg, .png, .svg"
                    onChange={() => {
                        if (!fileInputRef?.current?.files) return;
                        setImg(fileInputRef.current.files[0]);
                    }}
                />
            </div>
        </label>
    );
};

export default AddUserImage;