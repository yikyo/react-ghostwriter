import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { AppContainer } from '../containers';
import Home from './home';

export default () => (
  <Router history={createBrowserHistory()}>
    <AppContainer>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </AppContainer>
  </Router>
);
