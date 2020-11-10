import React, {useRef} from 'react';
import styles from './addUserImage.module.scss';
import defaultUserImg from '../../assets/no-image.png';

export interface AddUserImageProps {
    img?: File
    setImg: (x: File) => void
}

const AddUserImage: React.FC<AddUserImageProps> = ({img, setImg}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    return (
        <label htmlFor="file">
            <div
                className={styles.imageContainer}
                style={{backgroundImage: `url(${(img && URL.createObjectURL(img)) || defaultUserImg})`}}
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