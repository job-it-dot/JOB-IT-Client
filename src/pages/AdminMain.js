import React, { Component } from 'react';

import { Row, Col } from 'antd';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import DashBoard from './DashBoard';
import AdminApprove from './AdminApprove';

const { SubMenu } = Menu;

class AdminMain extends Component {
  handleClick = (e) => {
    this.setState({ key: e.key });

    console.log(this.state.key);
  };
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find((key) => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    let page;
    if (this.state.key === '1') {
      console.log('dd');
      page = <DashBoard />;
    }
    if (this.state.key === '2') {
      page = <AdminApprove />;
    }
    return (
      <>
        <Row style={{ marginTop: 10, width: 1000 }}>
          <Col span={5} style={{ height: 1450 }}>
            <Menu
              onClick={this.handleClick}
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ width: 256 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <MailOutlined />
                    <span>Navigation One</span>
                  </span>
                }
              >
                <Menu.Item key="1">Dash Board</Menu.Item>
                <Menu.Item key="2">기업 승인</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>

          <Col span={16} push={0.9} style={{ height: 1450, marginLeft: 80 }}>
            {page}
          </Col>
        </Row>
      </>
    );
  }
}

export default AdminMain;
