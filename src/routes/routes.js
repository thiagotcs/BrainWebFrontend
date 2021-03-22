import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Home from '../pages/Home';
import UserNew from '../pages/UserNew';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/usernew" component={UserNew} />
    </BrowserRouter>
  );
}

export default Routes;
