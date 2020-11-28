const LIKE_PATH = '/like';

export const LIKE_UPDATE_PATH = LIKE_PATH;

export function getLikeUpdatePath(oneNewsId: string) {
    return `${LIKE_UPDATE_PATH}/${oneNewsId}`;
}