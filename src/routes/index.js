import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { GlobalContainer } from '../containers';
import Home from './home';

export default () => (
  <Router history={createBrowserHistory()}>
    <GlobalContainer>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </GlobalContainer>
  </Router>
);
