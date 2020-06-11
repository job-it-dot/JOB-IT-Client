import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <PrivateRoutes exact path="/" component={Index} />
  </Switch>
);
