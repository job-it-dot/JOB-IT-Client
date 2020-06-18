import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';
import CorpSignUp from './pages/SignUpCorp';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={UserSignUp} />
    <Route exact path="/corpSignUp" component={CorpSignUp} />
    <PrivateRoutes exact path="/" component={Index} />
  </Switch>
);
