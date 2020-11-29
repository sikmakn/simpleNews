import fetchProcess from '../../../types/fetching';

export interface OmmentsState {
    value?: any[]
    creatingStatus?: fetchProcess
    creatingError?: string
    loadingStatus?: fetchProcess
    loadingError?: string
    updatingStatuses: { [k: string]: fetchProcess }
    updatingErrors: { [k: string]: string }
}