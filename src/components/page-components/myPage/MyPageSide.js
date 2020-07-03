import React, { Component } from 'react';
import { Col, Row, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import css from './MyPage.module.less';

class MyPageSide extends Component {
  render() {
    return (
      <Row sm={{ span: 24 }}>
        <Col sm={{ span: 22 }} style={{ marginTop: 30 }}>
          <h1 style={{ marginLeft: 40 }}>My Page</h1>
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
              <SubMenu key="2" title="스크랩/관심기업">
                <Menu.Item key="6">스크랩</Menu.Item>
                <Menu.Item key="7">관심기업</Menu.Item>
                <Menu.Item key="8">최근본 공고</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">입사지원 목록</Menu.Item>
              <Menu.Item key="10">test</Menu.Item>
            </Menu>
          </div>
        </Col>
      </Row>
    );
  }
}

export default MyPageSide;
