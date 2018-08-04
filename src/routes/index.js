import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './home';

export default () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);
