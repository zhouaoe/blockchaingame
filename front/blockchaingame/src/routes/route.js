import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from '../App';
import Login from '../components/Login';
import ControlPanel from '../views/ControlPanel';

const history=createHistory()
class MRoute extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/app" component={App}/>
                    <Route path="/controlpanel" component={ControlPanel}/>
                </Switch>
            </Router>
        );
    }
}


export default MRoute;