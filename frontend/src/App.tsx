import './wdyr';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage';
import {PAGE_PATHS} from './paths';
import OneNewsPage from './pages/oneNewsPage';
import AddOneNewsPage from './pages/addOneNewsPage';
import EditOneNewsPage from './pages/editOneNewsPages';
import UserPage from './pages/userPage';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={PAGE_PATHS.USER} exact component={UserPage}/>
                <Route path={PAGE_PATHS.ONE_NEWS} exact component={OneNewsPage}/>
                <Route path={PAGE_PATHS.ADD_ONE_NEWS} exact component={AddOneNewsPage}/>
                <Route path={PAGE_PATHS.EDIT_ONE_NEWS} exact component={EditOneNewsPage}/>
                <Route path={PAGE_PATHS.MAIN} exact component={MainPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
