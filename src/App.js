import React from 'react';
import './App.less';
import routes from './routes';
import Layout from './components/common-components/layout/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
