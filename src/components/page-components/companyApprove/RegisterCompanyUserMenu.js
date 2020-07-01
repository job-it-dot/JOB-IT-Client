import React, { Component } from 'react';
//import { Row, Col } from 'antd';
//import css from '../components/page-components/CompanyApprove/CompanyApprove.module.less';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

class RegisterCompanyUserMenu extends Component {
  render() {
    return (
      <Menu
        onClick={this.props.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>승인/지원자 조회</span>
            </span>
          }
        >
          <Menu.Item key="1">가입신청 기업 목록</Menu.Item>
          <Menu.Item key="2">지원자(이력서) 조회</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="회원/기업">
          <Menu.Item key="5">회원 조회/강제 탈퇴</Menu.Item>
          <Menu.Item key="6">기업 조회/강제 탈퇴</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>환불/매출 목록</span>
            </span>
          }
        >
          <Menu.Item key="9">환불 목록</Menu.Item>
          <Menu.Item key="10">매출 목록</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}
export default withRouter(RegisterCompanyUserMenu);
