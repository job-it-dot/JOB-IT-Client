import React from 'react';
import { Row, Col, Card, Button, Typography } from 'antd';
import { useHistory } from 'react-router-dom';

const { Title } = Typography;
const { Meta } = Card;

const ResumeList = () => {
  let history = useHistory();

  const ResumeClick = () => {
    console.log('등록한 이력서 보기');
  };

  const ResumeInsertClick = () => {
    history.push('/resume');
  };

  return (
    <>
      <div style={{ marginTop: 30 }}>
        <Title level={4} style={{ marginLeft: 5, marginBottom: 16 }}>
          내 이력서
        </Title>
        <Row gutter={[16, 16]}>
          {[0, 0, 0, 0, 0].map((_, index) => (
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} key={index}>
              <Card
                style={{ maxHeight: 130, minHeight: 130 }}
                hoverable
                cover={
                  <Button type="primary" size={'large'}>
                    {index + 1}번 이력서
                  </Button>
                }
                onClick={ResumeClick}
              >
                <Meta title="이력서제목최대8글자" style={{ textAlign: 'center' }} />
              </Card>
            </Col>
          ))}
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <Button
              type="primary"
              size={'large'}
              style={{ maxHeight: 130, minHeight: 130, minWidth: 220 }}
              onClick={ResumeInsertClick}
            >
              추가 (+)
            </Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ResumeList;
