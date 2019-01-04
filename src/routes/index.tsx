import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContainer } from '../containers';

import Home from './home';
import Post from './post';
import Posts from './posts';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppContainer>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/posts" component={Posts} />
          <Route path="/posts/:title" component={Post} />
        </AppContainer>
      </Switch>
    </BrowserRouter>
  );
};
