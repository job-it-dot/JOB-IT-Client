import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { Typography, Card } from 'antd';
import AdminApprove from './AdminApprove';

const { Title, Text } = Typography;

const gridStyle = {
  width: '100%',
  heigth: '100%',
  textAlign: 'center',
};

class DashBoard extends Component {
  render() {
    return (
      <>
        <Row gutter={16} style={{ marginTop: 10, marginLeft: 3 }}>
          <Col span={6}>
            <Card.Grid style={gridStyle}>
              Total Profit
              <br />
              <Title level={3}>
                <Text strong>999,999</Text>
              </Title>
            </Card.Grid>
          </Col>
          <Col span={6}>
            <Card.Grid style={gridStyle}>
              신규 가입
              <br />
              <Title level={3}>
                <Text>30</Text>
              </Title>
            </Card.Grid>
          </Col>
          <Col span={6}>
            <Card.Grid style={gridStyle}>
              등록 공고
              <br />
              <Title level={3}>
                <Text strong>50</Text>
              </Title>
            </Card.Grid>
          </Col>
          <Col span={6}>
            <Card.Grid style={gridStyle}>
              Referrals
              <br />
              <Title level={3}>
                <Text strong>12,345</Text>
              </Title>
            </Card.Grid>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: 10, marginLeft: 3 }}>
          <AdminApprove />
        </Row>
      </>
    );
  }
}
export default DashBoard;
