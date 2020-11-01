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
    MAIN: '/:tag',
    ONE_NEWS: 'news/:id',
};