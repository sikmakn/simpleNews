const NEWS_PATH = '/news';

export const CREATE_PATH = `${NEWS_PATH}/create`;
export const FIND_ONE_PATH = `${NEWS_PATH}/one`;
export const UPDATE_PATH = `${NEWS_PATH}/update`;
export const FIND_MANY_PATH = `${NEWS_PATH}/many`;
export const FIND_MANY_BASIC = `${NEWS_PATH}/manyBasic`;

export function createOneNewsPath() {
    return CREATE_PATH;
}

export function findOneNewsPath(id: string) {
    return `${FIND_ONE_PATH}/${id}`;
}

export function updateOneNewsPath(id: string) {
    return `${UPDATE_PATH}/${id}`;
}

export function findManyNewsPath({tag, sort}: {
    tag?: string
    sort?: 'last' | 'hot'
}) {
    let path = `${FIND_MANY_PATH}?`;
    if (tag) path += `&tag=${tag}`;
    if (sort) path += `&sort=${sort}`;
    return path;
}

export function findManyBasicPath({tag, sort}: {
    tag?: string
    sort?: 'last' | 'hot'
}) {
    let path = `${FIND_MANY_BASIC}?`;
    if (tag) path += `&tag=${tag}`;
    if (sort) path += `&sort=${sort}`;
    return path.toString();
}