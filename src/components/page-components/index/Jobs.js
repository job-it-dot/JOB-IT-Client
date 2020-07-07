import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const { Title } = Typography;
const { Meta } = Card;

const Jobs = () => {
  let history = useHistory();

  const cardClick = (index) => {
    console.log(index);
    axios({
      method: 'post',
      url: 'http://api.jobit.co.kr:9595/guest/readRecruit',
      data: {
        recruitId: index,
      },
    })
      .then(({ data }) => {
        history.push({
          pathname: '/recruitDetail',
          state: { detail: data.applys },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
              onClick={() => cardClick(index)}
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
