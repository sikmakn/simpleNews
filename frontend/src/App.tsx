import './wdyr';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage';
import {PAGE_PATHS} from "./paths";
import OneNewsPage from "./pages/oneNewsPage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={PAGE_PATHS.MAIN} exact component={MainPage}/>
                <Route path={PAGE_PATHS.ONE_NEWS} exact component={OneNewsPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
