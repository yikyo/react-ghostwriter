import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { AppContainer } from '../containers';

import Home from './home';
import Posts from './posts';

export default () => {
  return (
    <Router history={createBrowserHistory()}>
      <AppContainer>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </AppContainer>
    </Router>
  );
};
