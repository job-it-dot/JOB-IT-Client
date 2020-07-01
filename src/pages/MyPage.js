import React, { Component } from 'react';
import MyPageSide from './../components/page-components/myPage/MyPageSide';
import MyPageUser from './../components/page-components/myPage/MyPageUser';
import { Row, Col } from 'antd';
import MyPageContent from '../components/page-components/myPage/MyPageContent';
import MyPageSupportList from '../components/page-components/myPage/MyPageSupportList';
import MyPageResumeList from '../components/page-components/myPage/MyPageResumeList';
import MyPageUserUpdate from '../components/page-components/myPage/MyPageUserUpdate';

class MyPage extends Component {
  state = { key: '0' };

  handleClick1 = (e) => {
    //console.log(e.key);
    this.setState({ key: e.key });
    console.log(this.state.key);
  };

  render() {
    const key = this.state.key;
    let u;
    if (key === '3') {
      u = <MyPageUser />;
    } else if (key === '4') {
      u = <MyPageUserUpdate />;
    } else if (key === '5') {
      u = <MyPageContent />;
    } else if (key === '6') {
      u = <MyPageContent />;
    } else if (key === '7') {
      u = <MyPageContent />;
    } else if (key === '8') {
      u = <MyPageResumeList />;
    } else if (key === '9') {
      u = <MyPageSupportList />;
    }

    return (
      <Row>
        <Col span={18} push={6} style={{ height: 700 }}>
          {u}
        </Col>
        <Col span={6} pull={18} style={{ height: 700 }}>
          <MyPageSide handleClick1={this.handleClick1} />
        </Col>
      </Row>
    );
  }
}
export default MyPage;
