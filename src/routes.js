import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';
import ResumeResult from './components/page-components/Resume/ResumeResult';
import Resume from './components/page-components/Resume/Resume';
import RecruitDetail from './pages/Recruit';
import Jobs from './components/page-components/index/Jobs';
import FindPassWord from './pages/FindPassWord';
import resumeView from './pages/ResumeView.js';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/findPassWord" component={FindPassWord} />
    <Route exact path="/signup" component={UserSignUp} />
    <Route exact path="/recruitDetail" component={RecruitDetail} />
    <Route exact path="/jobs" component={Jobs} />
    <Route exact path="/resumeView" component={resumeView} />
    {/*<PrivateRoutes exact path="/" component={Jobs} />*/}
    <PrivateRoutes exact path="/" component={Index} />
    <PrivateRoutes exact path="/resume" component={Resume} />
    <PrivateRoutes exact path="/resumeResult" component={ResumeResult} />
  </Switch>
);
