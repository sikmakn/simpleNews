import React from 'react';
import styles from './tagsFilter.module.scss';
import {NavLink} from 'react-router-dom';
import {mainPagePath, TAG_PATHS} from '../../paths';
import {TagEnum, TAGS} from '../../types/tag';

const TagsFilter: React.FC = () =>
    (
        <nav className={styles.navContainer}>
            {Object.values(TagEnum).map(tagType => (
                <NavLink className={styles.nav} activeClassName={styles.active}
                         key={tagType}
                         to={mainPagePath(TAG_PATHS[tagType])}
                >
                    {TAGS[tagType].name}
                </NavLink>
            ))}
        </nav>
    );

export default TagsFilter;