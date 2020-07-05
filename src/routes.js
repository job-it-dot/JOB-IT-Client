import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';
import ResumeResult from './components/page-components/Resume/ResumeResult';
import Resume from './components/page-components/Resume/Resume';
import RecruitDetail from './pages/Recruit';
import JobMain from './pages/JobMain';
import FindPassWord from './pages/FindPassWord';
import ResumeList from './components/page-components/Resume/ResumeList';
import ResumeView from './pages/ResumeView';
import CompanyDetail from './pages/Company';
import Apply from './pages/Apply.js';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/findPassWord" component={FindPassWord} />
    <Route exact path="/signup" component={UserSignUp} />
    <Route exact path="/recruitDetail" component={RecruitDetail} />
    <Route exact path="/jobs" component={JobMain} />
    <Route exact path="/companyDetail" component={CompanyDetail} />
    <Route exact path="/" component={Index} />
    <PrivateRoutes exact path="/resumeList" component={ResumeList} />
    <PrivateRoutes exact path="/resume" component={Resume} />
    <PrivateRoutes exact path="/resumeResult" component={ResumeResult} />
    <PrivateRoutes exact path="/resumeView" component={ResumeView} />
    <PrivateRoutes exact path="/apply" component={Apply} />
  </Switch>
);
