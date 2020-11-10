import {combineReducers} from 'redux';
import mainPage from './mainPage/reducers';
import signUpForm from './signUpForm/reducers';

export default combineReducers({
    mainPage,
    signUpForm,
});