import fetchProcess from '../../../types/fetching';

export interface SubCommentsState {
    value: { [k: string]: any[] }
    loadingStatuses: { [k: string]: fetchProcess }
    loadingErrors: { [k: string]: string }
    creatingStatuses: { [k: string]: fetchProcess }
    creatingErrors: { [k: string]: string }
    updatingStatuses: { [commentId: string]: { [subCommentId: string]: fetchProcess } }
    updatingErrors: { [commentId: string]: { [subCommentId: string]: string } }
}