import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Ex2 from './pages/Ex2';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      
      <Route exact path="/Ex2">
        <Ex2 />
      </Route>
    </Switch>
  )
}