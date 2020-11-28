const SUB_COMMENT_PATH = '/subcomment';

export const GET_BY_COMMENT_ID_PATH = SUB_COMMENT_PATH;
export const CREATE_SUB_COMMENT_PATH = SUB_COMMENT_PATH;
export const UPDATE_SUB_COMMENT_PATH = SUB_COMMENT_PATH;

export function getSubCommentsPath(commentId: string) {
    return `${GET_BY_COMMENT_ID_PATH}/${commentId}`;
}

export function createSubCommentPath(commentId: string) {
    return `${CREATE_SUB_COMMENT_PATH}/${commentId}`;
}

export function updateSubCommentPath(subCommentId: string) {
    return `${UPDATE_SUB_COMMENT_PATH}/${subCommentId}`;
}