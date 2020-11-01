import React from 'react';
import {Link} from 'react-router-dom';
import styles from './tag.module.scss';

export interface TagProps {
    name: TagName
}

export enum TagName {
    SPORT = 'sport',
    FINANCE = 'finance',
    MOVIES = 'movies',
    REAL_STATE = 'real_state',
    SHOPS = 'shops',
    WORKING = 'working',
    TV = 'tv',
    MAIL = 'mail',
    WEATHER = 'weather',
}

const tags = {
    [TagName.SPORT]: {
        name: 'СПОРТ',
        path: '/sport',
        color: '#609FFF'
    },
    [TagName.FINANCE]: {
        name: 'ФИНАНСЫ',
        path: '/finance',
        color: '#68E082',
    },
    [TagName.MOVIES]: {
        name: 'АФИША',
        path: '/movies',
        color: '#F34C4C'
    },
    [TagName.REAL_STATE]: {
        name: 'НЕДВИЖИМОСТЬ',
        path: '/realstate',
        color: '#EEBA00',
    },
    [TagName.SHOPS]: {
        name: 'МАГАЗИНЫ',
        path: '/shops',
        color: '#97CC00',
    },
    [TagName.WORKING]: {
        name: 'РАБОТА',
        path: '/working',
        color: '#FFAD33',
    },
    [TagName.TV]: {
        name: 'ТВ ПРОГРАММА',
        path: '/tv',
        color: '#8100E6',
    },
    [TagName.MAIL]: {
        name: 'ПОЧТА',
        path: '/mail',
        color: '#00C8D4',
    },
    [TagName.WEATHER]: {
        name: 'ПОГОДА',
        path: '/weather',
        color: '#F15A2A',
    },
};

const Tag: React.FC<TagProps> = ({name}) =>
    (<Link
        className={styles.tag}
        to={tags[name].path}
        style={{background: tags[name].color}}
    >
        {tags[name].name}
    </Link>);

export default Tag;