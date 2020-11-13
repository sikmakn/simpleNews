import React from 'react';
import styles from './userImage.module.scss';
import defaultImg from '../../assets/no-image.png';

export interface UserImageProps {
    src?: string
    size: number
}

const UserImage: React.FC<UserImageProps> = ({src, size}) =>
    (<img
        className={styles.userImage}
        style={{
            minWidth: size,
            minHeight: size,
            maxHeight: size,
            maxWidth: size,
        }}
        src={src || defaultImg}
        alt=""
    />);

export default UserImage;