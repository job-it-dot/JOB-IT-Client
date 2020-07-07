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
            <Card
              hoverable
              cover={<img alt="example" src={kosta} />}
            >
              <Meta title="코스타 직원 채용(신입/경력 모집)" description="(주)코스타" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={kosta} />}
            >
              <Meta title="코스타 강사 모집" description="(주)코스타" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={key} />}
            >
              <Meta title="Visual Art Designer" description="©VISUAL ARTS / Key" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={key} />}
            >
              <Meta title="Sounds Label Developer" description="©VISUAL ARTS / Key" />
            </Card>
          </Col>
          </Row>
          <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={samsung} />}
            >
              <Meta title="2020 삼성전자 시스템 개발자" description="(주)삼성전자" />
            </Card>
          </Col>
         
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={paworks} />}
            >
              <Meta title="Engineer CV 채용" description="P.A.WORKS" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={paworks} />}
            >
              <Meta title="Server Engineer" description="P.A.WORKS" />
            </Card>
          </Col>
          
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={instagram} />}
            >
              <Meta title="Instagram 프론트엔드 개발자 채용" description="Facebook, Inc." />
            </Card>
          </Col>
      </Row>
      <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={bluehole} />}
            >
              <Meta title="BlueHole QA 채용" description="Krafton Inc" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={bluehole} />}
            >
              <Meta title="BlueHole 서버 관리자 채용(경력)" description="Krafton Inc" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src="https://t1.daumcdn.net/comis/jobs/images/logo/meta_career.png" />}
            >
              <Meta title="카카오 2020 하반기 인턴 모집" description="(주)카카오" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={tiktok} />}
            >
              <Meta title="android/iOS 개발자 채용" description="(주)바이트댄스" />
            </Card>
          </Col>
      </Row>
      <Row gutter={[16, 16]}>
        
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={google} />}
            >
              <Meta title="YouTube 운영 경력직 채용" description="Google Inc" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={netmarble} />}
            >
              <Meta title="넷마블 홈페이지 개발자 채용" description="(주)넷마블" />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={naver} />}
            >
              <Meta title="네이버 블로그 운영팀장 채용" description="ⓒ NAVER Corp." />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              cover={<img alt="example" src={naver} />}
            >
              <Meta title="네이버 웹툰 개발자 채용" description="ⓒ NAVER Corp" />
            </Card>
          </Col>
          </Row>
          
      </>
    );
  }
}

export default CompanyRecruitList;
