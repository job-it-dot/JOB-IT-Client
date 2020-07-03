import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

class CompanyRecruitList extends Component {
  render() {
    return (
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
    );
  }
}

export default CompanyRecruitList;
