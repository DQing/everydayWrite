import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import React from "react";
import {render} from "react-dom";
import App from "./components/App";
import Home from './components/Home'
import LoginAndRegister from  './components/LoginAndRegister'


render(
    <Router history={browserHistory}>

        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="Home" component={Home}/>
            <Route path="LoginAndRegister" component={LoginAndRegister}/>
        </Route>
    </Router>,
    document.getElementById('App'));