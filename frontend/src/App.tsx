import './wdyr';

import React from 'react';
import './App.css';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers';
import thunk from 'redux-thunk';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {PAGE_PATHS} from './paths';
import EditOneNewsPage from './pages/editOneNewsPages';
import UserPage from './pages/userPage';
import MainPageHOC from './pages/mainPage/hoc';
import OneNewsPageHOC from './pages/oneNewsPage/hoc';
import NoMatchPage from './pages/noMatchPage';
import AddOneNewsPageHOC from './pages/addOneNewsPage/hoc';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path={PAGE_PATHS.USER} exact component={UserPage}/>
                    <Route path={PAGE_PATHS.ONE_NEWS} exact component={OneNewsPageHOC}/>
                    <Route path={PAGE_PATHS.ADD_ONE_NEWS} exact component={AddOneNewsPageHOC}/>
                    <Route path={PAGE_PATHS.EDIT_ONE_NEWS} exact component={EditOneNewsPage}/>
                    <Route path={PAGE_PATHS.MAIN} exact component={MainPageHOC}/>
                    <Route path="*" exact component={NoMatchPage}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
