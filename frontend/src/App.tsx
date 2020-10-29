import './wdyr';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
