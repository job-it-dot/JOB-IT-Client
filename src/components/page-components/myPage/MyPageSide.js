import React, { Component } from 'react';
import { Col, Row, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import css from './MyPage.module.less';

class MyPageSide extends Component {
  render() {
    return (
      <Row sm={{ span: 24 }}>
        <Col sm={{ span: 22 }} style={{ marginTop: 30 }}>
          <h1 style={{ marginLeft: 40 }}>
            {' '}
            <a href="/mypage" className={css.sssssss}>
              My Page
            </a>
          </h1>
          <div className={css.sideMnue}>
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={['4']}
              style={{ marginLeft: 10, marginTop: 10, height: 400 }}
              onClick={this.props.handleClick1}
            >
              <SubMenu key="1" title="내 정보 관리">
                <Menu.Item key="3">회원정보 보기</Menu.Item>
                <Menu.Item key="4">회원정보 수정</Menu.Item>
                <Menu.Item key="5">비밀번호 변경</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </Col>
      </Row>
    );
  }
}

export default MyPageSide;
