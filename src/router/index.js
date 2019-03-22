import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../screens/Home';

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route path='/collections/' component={Home} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
