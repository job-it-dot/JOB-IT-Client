import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import classes from './TestList.module.less';
import op from './ot.png';
import nice from './nice.png';
import nices from './nices.png';
import nicess from './testss.png';
import nicesq from './nicess.png';
import incesss from './nicesss.png';

const { Title } = Typography;

const { Meta } = Card;

const Tests = () => {
  return (
    <div style={{ marginTop: 30 }}>
      <Title level={4} style={{ marginLeft: 5, marginBottom: 16 }}>
        TOP 6
      </Title>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card className={classes.cardbackgroundclor} hoverable cover={<img alt="example" src={op} />}>
            <Meta title="LINE" description="LINE 경력 개발자 채용" />
          </Card>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card className={classes.cardbackgroundclor} hoverable cover={<img alt="example" src={nice} />}>
            <Meta title="NC소프트" description="부분별 수시 채용" />
          </Card>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card className={classes.cardbackgroundclor} hoverable cover={<img alt="example" src={nices} />}>
            <Meta title="(주)하나금융티아이" description="융합기술원 석,박사 채용" />
          </Card>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card className={classes.cardbackgroundclor} hoverable cover={<img alt="example" src={nicess} />}>
            <Meta title="웅진씽크빅" description="웹기획 경력직 모집" />
          </Card>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card className={classes.cardbackgroundclor} hoverable cover={<img alt="example" src={nicesq} />}>
            <Meta title="(주)비와이엔블랙야크" description="웹개발 경력사원채용" />
          </Card>
        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
          <Card className={classes.cardbackgroundclor} hoverable cover={<img alt="example" src={incesss} />}>
            <Meta title="(주)리치엔코" description="개발 부분별 경력직 모집" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Tests;
