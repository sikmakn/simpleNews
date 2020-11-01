import './wdyr';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage';
import {PAGE_PATHS} from "./paths";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={PAGE_PATHS.MAIN} exact component={MainPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
