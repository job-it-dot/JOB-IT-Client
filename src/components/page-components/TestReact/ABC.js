import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SubMenu from './SubMenu';
import TestList from './TestList';

class ABC extends Component {
  render() {
    return (
      <>
        <Row>
          <Col span={18} push={6} style={{ height: 2000 }}>
            <div>
              <TestList />
            </div>
          </Col>
          <Col span={6} pull={18} style={{ height: 2000 }}>
            <SubMenu />
          </Col>
        </Row>
      </>
    );
  }
}

export default ABC;
