import React from 'react';
import styles from './userImage.module.scss';

export interface UserImageProps {
    src: string
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
        src={src}
        alt=""
    />);

export default UserImage;