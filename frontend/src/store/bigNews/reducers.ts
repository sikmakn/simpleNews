import {LIKE_BIG_NEWS, SET_BIG_NEWS} from './actions';
import updateLikesInNewsCards from '../../helpers/updateLikesInNewsCards';

const defaultState: { value?: any } = {};

const mainPageReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_BIG_NEWS:
            return {value: action.payload};
        case LIKE_BIG_NEWS:
            return {value: updateLikesInNewsCards(action.payload, state.value)};
    }
    return state;
};

export default mainPageReducer;