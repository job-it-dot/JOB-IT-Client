import React, { Component } from 'react';
import { Row, Col } from 'antd';
import RegisterCompanyUserMenu from '../components/page-components/CompanyApprove/RegisterCompanyUserMenu';
import CompanyAproveForm from '../components/page-components/CompanyApprove/CompanyAproveForm';
import ShowApplyForm from '../components/page-components/ApplyList/ShowApplyForm.js';
import { Layout } from 'antd';
import { Breadcrumb } from 'antd';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class ApproveCompanyCopy extends Component {
  state = {
    key: '1',
  };

  handleClick = (e) => {
    console.log(e.key);
    this.setState({ key: e.key });
    console.log(this.state.key);
  };

  render() {
    let page;
    if (this.state.key === '1') {
      page = <CompanyAproveForm />;
    }
    if (this.state.key === '2') {
      page = <ShowApplyForm />;
    }

    return (
      <>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              onClick={this.handleClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="승인/지원자 조회">
                <Menu.Item key="1">가입신청 기업 목록</Menu.Item>
                <Menu.Item key="2">지원자(이력서 조회)</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="회원">
                <Menu.Item key="3">회원 조회/강제 탈퇴</Menu.Item>
                <Menu.Item key="4">기업 조회/강제 탈퇴</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="환불/매출 목록">
                <Menu.Item key="5">환불 목록</Menu.Item>
                <Menu.Item key="6">매출 목록</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {page}
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}
export default ApproveCompanyCopy;
