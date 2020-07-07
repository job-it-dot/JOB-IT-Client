import React, { Component } from 'react';
import CompanyRecruitList from './CompanyRecuirtList';
import CompanyInfo from './CompanyInfo';
import CompanyTop from './CompanyTop';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="기업정보" key="1">
      <CompanyInfo />
    </TabPane>
    <TabPane tab="채용" key="2">
      <CompanyRecruitList />
    </TabPane>
  </Tabs>
);

class CompanyMain extends Component {
  render() {
    return (
      <>
        <CompanyTop />
        <Demo />
      </>
    );
  }
}

export default CompanyMain;
