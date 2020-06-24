import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from './components/common-components/route/PrivateRoutes';

import Index from './pages/Index';
import Login from './pages/Login.js';
import UserSignUp from './pages/SignUpUser.js';
import ResumeForm from './pages/ResumeForm';
import ResumeForm2 from './components/page-components/Resume/ResumeForm2';
import ResumeForm3 from './components/page-components/Resume/ResumeForm3';
import ResumeForm4 from './components/page-components/Resume/ResumeForm4';
import ResumeForm5 from './components/page-components/Resume/ResumeForm5';
import ResumeForm6 from './components/page-components/Resume/ResumeForm6';
import ResumeResult from './components/page-components/Resume/ResumeResult';

export default (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={UserSignUp} />
    <PrivateRoutes exact path="/" component={Index} />
    <PrivateRoutes exact path="/resume" component={ResumeForm} />
    <PrivateRoutes exact path="/resumePrivacy" component={ResumeForm} />
    <PrivateRoutes exact path="/resumeCareer" component={ResumeForm2} />
    <PrivateRoutes exact path="/resumeCertificate" component={ResumeForm3} />
    <PrivateRoutes exact path="/resumeLanguageAbility" component={ResumeForm4} />
    <PrivateRoutes exact path="/resumePortfolio" component={ResumeForm5} />
    <PrivateRoutes exact path="/resumeAutobiography" component={ResumeForm6} />
    <PrivateRoutes exact path="/resumeResult" component={ResumeResult} />
  </Switch>
);
