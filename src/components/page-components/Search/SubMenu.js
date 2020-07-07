import React, { Component } from 'react';
import { Menu } from 'antd';
import {} from '@ant-design/icons';
import classes from './TestList.module.less';
import { Row, Col } from 'antd';

class SubMenu extends Component {
  handleClick = (e) => {
    console.log('click', e);
  };

  render() {
    const { SubMenu } = Menu;
    return (
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 10 }}>
          <div className={classes.subMenu}>
            <Menu onClick={this.handleClick} style={{}} mode="vertical">
              <SubMenu key="sub1" title="탐색">
                <Menu.ItemGroup title="탐색">
                  <Menu.Item key="1">
                    <a href="test">진행중</a>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <a href="/">마감</a>
                  </Menu.Item>
                  <Menu.Item key="3">예상일정</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <SubMenu key="sub2" title="직군별연봉">
                <Menu.ItemGroup title="목록보기">
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <SubMenu key="sub3" title="이력서">
                <Menu.Item key="9">Option 9</Menu.Item>
              </SubMenu>

              <SubMenu key="sub4" title="추천"></SubMenu>

              <SubMenu key="sub5" title="이벤트"></SubMenu>

              <SubMenu key="sub6" title="매치업"></SubMenu>
            </Menu>
          </div>
        </Col>
      </Row>
    );
  }
}

export default SubMenu;
