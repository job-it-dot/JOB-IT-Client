import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={UserSignUp} />
    <PrivateRoutes exact path="/" component={Index} />
  </Switch>
);
