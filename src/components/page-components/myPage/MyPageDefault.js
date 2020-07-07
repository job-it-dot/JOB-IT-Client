import React, { Component } from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import MypageScrap from './MypageScrap';
import MypageAttention from './MypageAttention';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={callback} style={{ marginTop: 80 }}>
    <TabPane tab="스크랩 공고" key="1">
      <MypageScrap />
    </TabPane>
    <TabPane tab="관심기업" key="2">
      <MypageAttention />
    </TabPane>
  </Tabs>
);

class MyPageDefault extends Component {
  render() {
    return <Demo />;
  }
}
export default MyPageDefault;
