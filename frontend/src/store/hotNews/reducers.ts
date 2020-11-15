import {LIKE_HOT_NEWS, SET_HOT_NEWS} from './actions';
import updateLikesInNewsCards from '../../helpers/updateLikesInNewsCards';

const defaultState: { value?: any } = {};

const hotNewsReducer = (state = defaultState, action: { type: string, payload: any }) => {
    switch (action.type) {
        case SET_HOT_NEWS:
            return {value: action.payload};
        case LIKE_HOT_NEWS:
            return {
                value: updateLikesInNewsCards(action.payload, state.value),
            };
    }
    return state;
};

export default hotNewsReducer;