import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from 'components/NavBar';
import Home from 'screens/Home';
import Photo from 'screens/Photo';
import Search from 'screens/Search';

function Router() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route path='/search/:searchType/:searchQuery' component={Search} />
          <Route path='/photos/:photoId' component={Photo} />
          <Route path='/collections/' component={Home} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Router;
