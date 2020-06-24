import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';
import ResumeForm from './pages/ResumeForm';
import ResumeCareerForm from './components/page-components/resume/ResumeCareerForm';
import ResumeCertificateForm from './components/page-components/resume/ResumeCertificateForm';
import ResumeLanguageAbilityForm from './components/page-components/resume/ResumeLanguageAbilityForm';
import ResumePortfolioForm from './components/page-components/resume/ResumePortfolioForm';
import ResumeAutobiographyForm from './components/page-components/resume/ResumeAutobiographyForm';
import ResumeResult from './components/page-components/resume/ResumeResult';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={UserSignUp} />
    <PrivateRoutes exact path="/" component={Index} />
    <PrivateRoutes exact path="/resume" component={ResumeForm} />
    <PrivateRoutes exact path="/resumePrivacy" component={ResumeForm} />
    <PrivateRoutes exact path="/resumeCareer" component={ResumeCareerForm} />
    <PrivateRoutes exact path="/resumeCertificate" component={ResumeCertificateForm} />
    <PrivateRoutes exact path="/resumeLanguageAbility" component={ResumeLanguageAbilityForm} />
    <PrivateRoutes exact path="/resumePortfolio" component={ResumePortfolioForm} />
    <PrivateRoutes exact path="/resumeAutobiography" component={ResumeAutobiographyForm} />
    <PrivateRoutes exact path="/resumeResult" component={ResumeResult} />
  </Switch>
);
