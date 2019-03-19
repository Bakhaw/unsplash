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
          {/* <Route path='/artist/:artistId' component={Artist} /> */}
          <Route path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
