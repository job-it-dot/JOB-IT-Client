import React, { Component } from 'react';
import { Col, Menu } from 'antd';
import MypageContent from './MyPageContent';
import MyPageResumeList from './MyPageResumeList';
import MyPageUserUpdate from './MyPageUserUpdate';

class MyPageManage extends Component {
  state = { key: '0' };

  handleClick2 = (e) => {
    console.log(e.key);
    this.setState({ key: e.key });
    //console.log(this.state.key);
  };
  render() {
    const key = this.state.key;
    let u;
    if (key == 4) {
      u = <MypageContent />; //이력서 등록 페이지 import 하기
    } else if (key == 5) {
      u = <MyPageResumeList />;
    } else if (key == 6) {
      u = <MyPageUserUpdate />;
    }

    return (
      <Col sm={{ span: 23 }}>
        <h1 style={{ textAlign: 'center', marginTop: 30 }}>이름</h1>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ marginLeft: 20, height: 60, marginTop: 15 }}
          onClick={this.handleClick2}
        >
          <Menu.Item key="4">이력서 등록</Menu.Item>
          <Menu.Item key="5">내 이력서 보기</Menu.Item>
          <Menu.Item key="6">이력서 수정(임시)</Menu.Item>
        </Menu>
        <div style={{ marginTop: 10, marginLeft: 20, height: 400 }}>{u}</div>
      </Col>
    );
  }
}

export default MyPageManage;
