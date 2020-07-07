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
              width="170px"
              src="http://pds.saramin.co.kr/company/logo/201902/27/pnjmyx_pcb7-0_logo.jpg"
              alt="Sample"
              height="130"
            />
          </Col>
          <Col span={10} style={{ padding: 20 }}>
            <p>
              <Text className={classes.hiring}>채용중</Text>
            </p>
            <p>
              <Title level={3}>(주)코스타</Title>
            </p>
            <p>
              <Text>SW 개발/공급</Text>
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
