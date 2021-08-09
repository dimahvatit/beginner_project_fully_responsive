import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SigninPage from './pages/SigninPage';


function App() {
    return (
        <Router className='App'>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/signin" component={SigninPage} exact />
            </Switch>
        </Router>
    );
}

export default App;
