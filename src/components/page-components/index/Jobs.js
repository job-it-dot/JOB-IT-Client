import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
const { Title } = Typography;

const { Meta } = Card;

const Jobs = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <Title level={4} style={{ marginLeft: 5, marginBottom: 16 }}>
        나에게 딱 맞는 포지션
      </Title>
      <Row gutter={[16, 16]}>
        {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((_, index) => (
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} key={index}>
            <Card
              hoverable
              cover={<img alt="example" src="https://t1.daumcdn.net/comis/jobs/images/logo/meta_career.png" />}
            >
              <Meta title="백엔드 자바 개발자" description="카카오" />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Jobs;
