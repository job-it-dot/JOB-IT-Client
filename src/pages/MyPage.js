import React, { Component } from 'react';
import MyPageSide from './../components/page-components/myPage/MyPageSide';
import MyPageUser from './../components/page-components/myPage/MyPageUser';
import { Row, Col } from 'antd';
import MyPagePasswordChange from '../components/page-components/myPage/MyPagePasswordChange';
import MyPageUserUpdate from '../components/page-components/myPage/MyPageUserUpdate';
import MypageDefault from '../components/page-components/myPage/MyPageDefault';
//import PasswordCheck from '../components/page-components/myPage/PasswordCheck';

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

      //u = <PasswordCheck />;
    } else if (key === '5') {
      u = <MyPagePasswordChange />;
    } else {
      u = <MypageDefault />;
    }

    return (
      <Row>
        <Col span={18} push={6} style={{ height: 1200 }}>
          {u}
        </Col>
        <Col span={6} pull={18} style={{ height: 1200 }}>
          <MyPageSide handleClick1={this.handleClick1} />
        </Col>
      </Row>
    );
  }
}
export default MyPage;
