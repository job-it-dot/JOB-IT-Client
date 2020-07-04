import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';
import FindPassWord from './pages/FindPassWord';
import approveCompany from './pages/ApproveCompany.js';
import ShowApplyForm from './components/page-components/ApplyList/ShowApplyForm.js';
import AdminMain from './pages/AdminMain.js';
import DashBoard from './pages/DashBoard.js';
export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={UserSignUp} />
    <Route exact path="/findPassWord" component={FindPassWord} />
    <PrivateRoutes exact path="/applyList" component={ShowApplyForm} />
    <Route exact path="/approveCompany" component={approveCompany}></Route>
    <Route exact path="/adminPage" component={AdminMain}></Route>
    <Route exact path="/DashBoard" component={DashBoard}></Route>
    <PrivateRoutes exact path="/" component={Index} />
  </Switch>
);
