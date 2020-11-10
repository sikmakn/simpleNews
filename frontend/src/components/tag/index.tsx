import React from 'react';
import {Link} from 'react-router-dom';
import styles from './tag.module.scss';
import {TagEnum, TAGS} from '../../types/tag';
import {TAG_PATHS} from '../../paths';

export interface TagProps {
    type: TagEnum
}

const Tag: React.FC<TagProps> = ({type}) =>
    (<Link
        className={styles.tag}
        to={TAG_PATHS[type]}
        style={{background: TAGS[type].color}}
    >
        {TAGS[type].name.toUpperCase()}
    </Link>);


export default Tag;