import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';
import testList from './components/page-components/Search/TestList';
import ABC from './components/page-components/Search/ABC';
import Mypage from './pages/MyPage';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={UserSignUp} />
    <Route exact path="/test" component={testList} />
    <PrivateRoutes exact path="/" component={Index} />
    <PrivateRoutes exact path="/mypage" component={Mypage} />
    <Route exact path="/abc" component={ABC} />
  </Switch>
);
