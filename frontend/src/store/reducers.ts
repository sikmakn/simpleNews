import {combineReducers} from 'redux';
import bigNews from './bigNews/reducers';
import user from './user/reducers';
import oneNews from './oneNews/reducers';
import lastNews from './lastNews/reducers';
import hotNews from './hotNews/reducers';
import tag from './tag/reducers';

export default combineReducers({
    bigNews,
    user,
    oneNews,
    lastNews,
    hotNews,
    tag,
});