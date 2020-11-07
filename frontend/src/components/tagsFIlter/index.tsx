import React from 'react';
import styles from './tagsFilter.module.scss';
import {Link} from 'react-router-dom';
import {mainPagePath, TAG_PATHS} from '../../paths';
import {TagEnum, TAGS} from '../../types/tag';

const TagsFilter: React.FC = () => {
    return (
        <nav className={styles.nav}>
            {Object.values(TagEnum).map(tagType => (
                <Link
                    key={tagType}
                    to={mainPagePath(TAG_PATHS[tagType])}
                >
                    {TAGS[tagType].name}
                </Link>
            ))}
        </nav>
    );
};

export default TagsFilter;