import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';
import ResumeForm from './pages/ResumeForm';
import ResumeStep2 from './components/page-components/resume/ResumeStep2';
import ResumeStep3 from './components/page-components/resume/ResumeStep3';
import ResumeStep4 from './components/page-components/resume/ResumeStep4';
import ResumeStep5 from './components/page-components/resume/ResumeStep5';
import ResumeStep6 from './components/page-components/resume/ResumeStep6';
import ResumeResult from './components/page-components/resume/ResumeResult';
import RecruitDetail from './pages/Recruit';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={UserSignUp} />
    <Route exact path="/recruitDetail" component={RecruitDetail} />
    <PrivateRoutes exact path="/" component={Index} />
    <PrivateRoutes exact path="/resume" component={ResumeForm} />
    <PrivateRoutes exact path="/resumePrivacy" component={ResumeForm} />
    <PrivateRoutes exact path="/resumeCareer" component={ResumeStep2} />
    <PrivateRoutes exact path="/resumeCertificate" component={ResumeStep3} />
    <PrivateRoutes exact path="/resumeLanguageAbility" component={ResumeStep4} />
    <PrivateRoutes exact path="/resumePortfolio" component={ResumeStep5} />
    <PrivateRoutes exact path="/resumeAutobiography" component={ResumeStep6} />
    <PrivateRoutes exact path="/resumeResult" component={ResumeResult} />
  </Switch>
);
