import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';
import testList from './components/page-components/Search/TestList';
import ABC from './components/page-components/Search/ABC';
import MyPage from './pages/MyPage';
import ResumeResult from './components/page-components/Resume/ResumeResult';
import Resume from './components/page-components/Resume/Resume';
import RecruitDetail from './pages/Recruit';
import JobMain from './pages/JobMain';
import FindPassWord from './pages/FindPassWord';
import ResumeList from './components/page-components/Resume/ResumeList';
import ResumeView from './pages/ResumeView';
import CompanyDetail from './pages/Company';
import CompanyMain from './pages/CompanyMain';
import Admin from './pages/AdminMain';
import Apply from './pages/Apply.js';
import MyPage2 from './pages/MyPage2';
import RecruitInsert from './components/page-components/recruit/RecruitInsert';
import applyList from './components/page-components/company/ShowApplyForm';

import ResumeViewTest from './components/page-components/ResumeView/ResumeViewMain2';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/findPassWord" component={FindPassWord} />
    <Route exact path="/signup" component={UserSignUp} />

    <Route exact path="/test" component={testList} />
    <Route exact path="/mypage" component={MyPage} />
    <Route exact path="/abc" component={ABC} />
  
    <Route exact path="/RecruitInsert" component={RecruitInsert} />

    <Route exact path="/recruitDetail" component={RecruitDetail} />
    <Route exact path="/resumeViewTest" component={ResumeViewTest} />
    <Route exact path="/jobs" component={JobMain} />
    <Route exact path="/companyDetail" component={CompanyDetail} />
    <Route exact path="/companymain" component={CompanyMain} />
    <Route exact path="/adminpage" component={Admin} />
    <Route exact path="/" component={Index} />
    <PrivateRoutes exact path="/resumeList" component={ResumeList} />
    <PrivateRoutes exact path="/resume" component={Resume} />
    <PrivateRoutes exact path="/resumeResult" component={ResumeResult} />
    <PrivateRoutes exact path="/resumeView" component={ResumeView} />
    <PrivateRoutes exact path="/apply" component={Apply} />
    <PrivateRoutes exact path="/mypage2" component={MyPage2} />
  </Switch>
);
