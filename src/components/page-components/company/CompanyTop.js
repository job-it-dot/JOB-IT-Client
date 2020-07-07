import React, { Component } from 'react';
import classes from './Company.module.less';
import { Row, Col, Button, Typography } from 'antd';
import { HeartOutlined, LogoutOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

class CompanyTop extends Component {
  render() {
    return (
      <>
        <Row style={{ marginTop: 30, height: 150 }}>
          <Col span={4}>
            <img
              width="150px"
              src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"
              alt="Sample"
            />
          </Col>
          <Col span={10} style={{ padding: 20 }}>
            <p>
              <Text className={classes.hiring}>채용중</Text>
            </p>
            <p>
              <Title level={3}>(주)그레닉스</Title>
            </p>
            <p>
              <Text>그레닉스그룹 계열사 | 음식료·외식·프랜차이즈</Text>
            </p>
          </Col>
          <Col span={7} offset={3}>
            <Button className={classes.company_top_button} shape="round" icon={<HeartOutlined />}>
              654
            </Button>
            <Button className={classes.company_top_button} shape="circle" icon={<LogoutOutlined />}></Button>
            <Button className={classes.company_top_button} shape="round">
              홈페이지
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default CompanyTop;
