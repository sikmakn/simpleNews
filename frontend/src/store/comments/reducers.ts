import {ADD_COMMENT, ADD_SUB_COMMENT, SET_COMMENTS, SET_COUNT_OF_COMMENTS} from './actions';

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

const commentsReducers = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_COUNT_OF_COMMENTS:
            return {
                ...state,
                count: {value: action.payload},
            };
        case ADD_COMMENT:
            return {
                ...state,
                count: state.count.value ? {
                    ...state.count,
                    value: state.count.value + 1
                } : state.count,
                comments: {
                    value: [action.payload, ...state.comments.value!]
                }
            };
        case ADD_SUB_COMMENT:
            const commentsCopy = [...state.comments.value!];
            commentsCopy.find(c => c.id === action.payload.commentId)
                .subComments.push(action.payload);
            return {
                ...state,
                count: state.count.value ? {
                    ...state.count,
                    value: state.count.value + 1
                } : state.count,
                comments: {
                    value: commentsCopy,
                }
            };
        case SET_COMMENTS:
            return {
                ...state,
                comments: {value: action.payload},
            }
    }
    return state;
}

export default commentsReducers;