import {combineReducers} from 'redux';
import mainPage from './mainPage/reducers';
import user from './user/reducers';
import oneNews from './oneNews/reducers';

export default combineReducers({
    mainPage,
    user,
    oneNews
});