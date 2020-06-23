import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';
import ResumeForm from './pages/ResumeForm';
import ResumeForm2 from './components/page-components/Resume/ResumeFormTop';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={UserSignUp} />
    <PrivateRoutes exact path="/" component={Index} />
    <PrivateRoutes exact path="/resume" component={ResumeForm} />
    <PrivateRoutes exact path="/resumePrivacy" component={ResumeForm} />
    <PrivateRoutes exact path="/resumeCareer" component={ResumeForm2} />
  </Switch>
);
