import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import classes from './TestList.module.less';

const { Title } = Typography;

const { Meta } = Card;

const Tests = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <Title level={4} style={{ marginLeft: 5, marginBottom: 16 }}>
        TOP 6
      </Title>
      <Row gutter={[16, 16]}>
        {[0, 0, 0, 0, 0, 0].map((_, index) => (
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} key={index}>
            <Card
              className={classes.cardbackgroundclor}
              hoverable
              cover={<img alt="example" src="https://t1.daumcdn.net/comis/jobs/images/logo/meta_career.png" />}
            >
              <Meta title="(주)Job it" description="kosta그룹" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Tests;
