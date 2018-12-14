import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContainer } from '../containers';

import Home from './home';
import Posts from './posts';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppContainer>
          <Route exact={true} path="/" component={Home} />
          <Route path="/posts" component={Posts} />
        </AppContainer>
      </Switch>
    </BrowserRouter>
  );
};
