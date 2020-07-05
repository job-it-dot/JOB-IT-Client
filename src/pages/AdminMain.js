import React, { Component } from 'react';

import { Row, Col } from 'antd';
import { Menu } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';

import DashBoard from './DashBoard';

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
      page = <DashBoard />;
    }
    return (
      <>
        <Row style={{ marginTop: 10, width: 1000 }}>
          <Col span={3} style={{ height: 1450 }}>
            <Menu
              onClick={this.handleClick}
              mode="inline"
              openKeys={this.state.openKeys}
              onOpenChange={this.onOpenChange}
              style={{ width: 180 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <PlusSquareOutlined />
                    <span>메뉴</span>
                  </span>
                }
              >
                <Menu.Item key="1">Dash Board</Menu.Item>
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
