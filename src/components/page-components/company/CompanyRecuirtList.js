import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import kosta from './../../../assets/kosta.png';
import bluehole from './../../../assets/bluehole.png';
import google from './../../../assets/google.jpg';
import instagram from './../../../assets/instagram.jpg';
import key from './../../../assets/key.jpg';
import paworks from './../../../assets/paworks.jpg';
import naver from './../../../assets/naver.png';
import netmarble from './../../../assets/netmarble.jpg';
import samsung from './../../../assets/samsung.png';
import tiktok from './../../../assets/tiktok.jpg';

const { Meta } = Card;

class CompanyRecruitList extends Component {
  render() {
    return (
      <>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card hoverable cover={<img alt="example" src={kosta} />}>
              <Meta title="코스타 직원 채용(신입/경력 모집)" description="(주)코스타" />
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable cover={<img alt="example" src={kosta} />}>
              <Meta title="코스타 강사 모집" description="(주)코스타" />
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default CompanyRecruitList;
