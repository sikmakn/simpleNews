import {
    ADD_COMMENT,
    ADD_SUB_COMMENT,
    EDIT_COMMENT,
    EDIT_SUB_COMMENT,
    SET_COMMENTS,
    SET_COUNT_OF_COMMENTS
} from './actions';

interface CommentsState {
    count: {
        value?: number
    },
    comments: {
        value?: any[]
    }
}


const defaultState: CommentsState = {
    count: {},
    comments: {}
};

const commentsReducers = (state = defaultState, {type, payload}: any) => {
    switch (type) {
        case SET_COUNT_OF_COMMENTS:
            return {
                ...state,
                count: {value: payload},
            };
        case ADD_COMMENT:
            return {
                ...state,
                count: state.count.value ? {
                    ...state.count,
                    value: state.count.value + 1
                } : state.count,
                comments: {
                    value: [payload, ...state.comments.value!]
                }
            };
        case ADD_SUB_COMMENT:
            const commentsCopyForAdd = [...state.comments.value!];
            commentsCopyForAdd.find(c => c.id === payload.commentId)
                .subComments.push(payload);
            return {
                ...state,
                count: state.count.value ? {
                    ...state.count,
                    value: state.count.value + 1
                } : state.count,
                comments: {
                    value: commentsCopyForAdd,
                }
            };
        case SET_COMMENTS:
            return {
                ...state,
                comments: {value: payload},
            };
        case EDIT_COMMENT:
            return {
                ...state,
                comments: {
                    value: state.comments.value!.map(c => c.id === payload.id ?
                        {...payload, subComments: c.subComments} : c)
                }
            };
        case EDIT_SUB_COMMENT:
            const commentsCopyForEdit = [...state.comments.value!];
            const commentCopy = commentsCopyForEdit.find(c => c.id === payload.commentId);
            commentCopy.subComments = commentCopy.subComments
                .map((sc: any) => sc.id === payload.id ? payload : sc);
            return {
                ...state,
                comments: {
                    value: commentsCopyForEdit,
                }
            };
    }
    return state;
}

export default commentsReducers;