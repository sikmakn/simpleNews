export enum TagEnum {
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

export const TAGS= {
    [TagEnum.SPORT]: {
        name: 'Спорт',
        color: '#609FFF'
    },
    [TagEnum.FINANCE]: {
        name: 'Финансы',
        color: '#68E082',
    },
    [TagEnum.MOVIES]: {
        name: 'Афиша',
        color: '#F34C4C'
    },
    [TagEnum.REAL_STATE]: {
        name: 'Недвижимость',
        color: '#EEBA00',
    },
    [TagEnum.SHOPS]: {
        name: 'Магазины',
        color: '#97CC00',
    },
    [TagEnum.WORKING]: {
        name: 'Работа',
        color: '#FFAD33',
    },
    [TagEnum.TV]: {
        name: 'ТВ программа',
        color: '#8100E6',
    },
    [TagEnum.MAIL]: {
        name: 'Почта',
        color: '#00C8D4',
    },
    [TagEnum.WEATHER]: {
        name: 'Погода',
        color: '#F15A2A',
    },
};