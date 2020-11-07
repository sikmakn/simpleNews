import React from 'react';
import styles from './tagSelect.module.scss';
import {TagEnum, TAGS} from '../../types/tag';

export interface TagSelectProps {
    selected: TagEnum
    setSelected: (x: TagEnum) => void
}

const TagSelect: React.FC<TagSelectProps> =
    ({selected, setSelected}) =>
        (
            <label className={styles.label}>
                Категории:
                <select
                    defaultValue={selected}
                    onChange={(event) => setSelected(event.target.value as TagEnum)}
                >
                    {
                        Object.values(TagEnum).map(tagType =>
                            (<option
                                key={tagType}
                                value={tagType}
                            >
                                {TAGS[tagType].name}
                            </option>))
                    }
                </select>
            </label>
        );

export default TagSelect;