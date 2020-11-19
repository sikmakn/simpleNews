export interface ResponseError extends Error{
    status?: number
}

export enum Tag {
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