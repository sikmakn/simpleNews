import {TagEnum} from './types/tag';

export const TAG_PATHS = {
    [TagEnum.SPORT]: '/sport',
    [TagEnum.FINANCE]: '/finance',
    [TagEnum.MOVIES]: '/movies',
    [TagEnum.REAL_STATE]: '/realstate',
    [TagEnum.SHOPS]: '/shops',
    [TagEnum.WORKING]: '/working',
    [TagEnum.TV]: '/tv',
    [TagEnum.MAIL]: '/mail',
    [TagEnum.WEATHER]: '/weather',
}

export const PAGE_PATHS = {
    MAIN: '/:tag?',
    ONE_NEWS: '/news/:id',
    ADD_ONE_NEWS: '/addOneNews',
    EDIT_ONE_NEWS: '/editOneNews/:id?',
    USER: '/user',
};

export function addOneNewsPagePath() {
    return '/addOneNews';
}

export function userPagePath() {
    return '/user';
}

export function mainPagePath(tag: string = '') {
    return `/${tag}`;
}

export function oneNewsPagePath(id: string) {
    return `/news/${id}`;
}

export function editOneNewsPagePath(id: string) {
    return `/editOneNews/${id}`;
}