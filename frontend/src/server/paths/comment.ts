const COMMENT_PATH = '/comment';

export const GET_MANY_PATH = COMMENT_PATH;
export const CREATE_PATH = COMMENT_PATH;
export const UPDATE_PATH = COMMENT_PATH;

export function getManyCommentsPath(oneNewsId: string) {
    return `${GET_MANY_PATH}/${oneNewsId}`;
}

export function createCommentPath(oneNewsId: string) {
    return `${CREATE_PATH}/${oneNewsId}`;
}

export function updateCommentPath(commentId: string) {
    return `${UPDATE_PATH}/${commentId}`;
}