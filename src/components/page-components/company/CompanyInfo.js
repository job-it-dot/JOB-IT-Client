import React, { Component } from 'react';
import classes from './Company.module.less';
import { Row, Col, Typography, Table, List } from 'antd';
import { DollarOutlined, GiftOutlined, HomeOutlined, CoffeeOutlined } from '@ant-design/icons';

const { Text, Title, Link } = Typography;

class CompanyInfo extends Component {
  render() {
    return (
      <>
        <DeaultInfo />
        <Analyze />
        <Issue />
        <Hiring />
        <Enviroment />
      </>
    );
  }
}

class DeaultInfo extends Component {
  render() {
    return (
      <>
        <Title level={3} className={classes.title}>
          | 기본정보
        </Title>

        <div className={classes.company_box}>
          <Row className={classes.company_info_row}>
            <Col span={2}>
              <Text type="secondary">산업</Text>
            </Col>
            <Col span={10}>
              <Text>음식료,외식,프랜차이즈</Text>
            </Col>
            <Col span={2}>
              <Text type="secondary">사원수</Text>
            </Col>
            <Col span={10}>
              <Text>250명</Text>
            </Col>
          </Row>
          <Row className={classes.company_info_row}>
            <Col span={2}>
              <Text type="secondary">기업구분</Text>
            </Col>
            <Col span={10}>
              <Text>중소기업</Text>
            </Col>
            <Col span={2}>
              <Text type="secondary">설립일</Text>
            </Col>
            <Col span={10}>
              <Text>2012.06.12</Text>
            </Col>
          </Row>
          <Row className={classes.company_info_row}>
            <Col span={2}>
              <Text type="secondary">자본금</Text>
            </Col>
            <Col span={10}>
              <Text>1억 3,200만원</Text>
            </Col>
            <Col span={2}>
              <Text type="secondary">매출액</Text>
            </Col>
            <Col span={10}>
              <Text>240억 5,400만원</Text>
            </Col>
          </Row>
          <Row className={classes.company_info_row}>
            <Col span={2}>
              <Text type="secondary">대표자</Text>
            </Col>
            <Col span={10}>
              <Text>김종헌</Text>
            </Col>
            <Col span={2}>
              <Text type="secondary">주요사업</Text>
            </Col>
            <Col span={10}>
              <Text>프랜차이즈</Text>
            </Col>
          </Row>
          <Row className={classes.company_info_row}>
            <Col span={2}>
              <Text type="secondary">4대보험</Text>
            </Col>
            <Col span={10}>
              <Text>국민연금, 건강보험, 고용보험, 산재보험</Text>
            </Col>
            <Col span={2}>
              <Text type="secondary">홈페이지</Text>
            </Col>
            <Col span={10}>
              <Link>http://www.billyangel.co.kr/</Link>
            </Col>
          </Row>
          <Row className={classes.company_info_row}>
            <Col span={2}>
              <Text type="secondary">주소</Text>
            </Col>
            <Col span={10}>
              <Text>서울 강남구 강남대로94길 10 (역삼동) 13층 그레닉스</Text>
            </Col>
            <Col span={2}>
              <Text type="secondary"></Text>
            </Col>
            <Col span={10}>
              <Text></Text>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const columns = [
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '날짜',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '출처',
    dataIndex: 'origin',
    key: 'origin',
  },
];

const data = [
  {
    key: '1',
    title: '돈들여서 분석해놓은 고급자료',
    date: '2020.1.25',
    origin: 'Nice 평가정보',
  },
  {
    key: '2',
    title: '돈들여서 분석해놓은 고급자료',
    date: '2020.1.25',
    origin: 'Nice 평가정보',
  },
  {
    key: '3',
    title: '돈들여서 분석해놓은 고급자료',
    date: '2020.1.25',
    origin: 'Nice 평가정보',
  },
];

class Analyze extends Component {
  render() {
    return (
      <>
        <Title level={3} className={classes.title}>
          | 기업분석
        </Title>
        <div className={classes.company_box}>
          <Table pagination={false} style={{ padding: 30 }} columns={columns} dataSource={data} />
        </div>
      </>
    );
  }
}

class Issue extends Component {
  render() {
    return (
      <>
        <Title level={3} className={classes.title}>
          | 기업이슈
        </Title>

        <div className={classes.company_box}>
          <Title level={4}>연혁</Title>
          <Text>2012년 6월 주식회사 빌리엔젤 창립(서울)</Text>
          <br />
          <Text>2014년 7월 빌리엔젤 1공장 준공</Text>
          <br />
          <Text>2015년 8월 빌리엔젤 2공장 준공</Text>
          <br />
          <Text>2017년 10월 빌리엔젤 3공장 준공</Text>
          <br />
          <Text>경기도 의회 의장상 수상</Text>
          <br />
          <Text>햅섭 인증</Text>
          <br />
          <Text>ISO 9001</Text>
          <br />
          <Text>벤처기업 인증</Text>
          <br />
          <Text>소비자 만족지수 2016,2017,2018연속 수상</Text>
          <Text></Text>
        </div>
      </>
    );
  }
}

const recruitData = [
  '2020년 상반기 그레닉스 채용',
  '2020년 상반기 그레닉스 공개 채용',
  '2020년 상반기 그레닉스 각 부문 공개 채용',
];

class Hiring extends Component {
  render() {
    return (
      <>
        <Title level={3} className={classes.title}>
          | 고용현황
        </Title>
        <Row>
          <Col span={8}>
            <div className={classes.company_box}>
              <Title level={4}>사원수</Title>
              <Title style={{ textAlign: 'center' }}>250명</Title>
            </div>
          </Col>
          <Col span={16}>
            <div className={classes.company_box}>
              <Title level={4}>채용공고</Title>
              <List
                dataSource={recruitData}
                renderItem={(item) => (
                  <List.Item style={{ margin: 10 }}>
                    <Text className={classes.font_border} type="danger">
                      채용중
                    </Text>{' '}
                    {item}
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

class Enviroment extends Component {
  render() {
    return (
      <>
        <Title level={3} className={classes.title}>
          | 근무환경
        </Title>
        <div className={classes.company_box}>
          <Title level={4}>기업소개</Title>
          <Text>2012년 6월 주식회사 빌리엔젤 창립(서울)</Text>
          <br />
          <Text>2014년 7월 빌리엔젤 1공장 준공</Text>
          <br />
          <Text>2015년 8월 빌리엔젤 2공장 준공</Text>
          <br />
          <Text>2017년 10월 빌리엔젤 3공장 준공</Text>
          <br />
          <Text>경기도 의회 의장상 수상</Text>
          <br />
          <Text>햅섭 인증</Text>
          <br />
          <Text>ISO 9001</Text>
          <br />
          <Text>벤처기업 인증</Text>
          <br />
          <Text>소비자 만족지수 2016,2017,2018연속 수상</Text>
          <Text></Text>
        </div>
        <div className={classes.company_box}>
          <Title level={4}>사진/동영상</Title>
          <Row>
            <Col span={6}>
              <img
                width="180px"
                src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"
                alt="Company"
              />
            </Col>
            <Col span={6}>
              <img
                width="180px"
                src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"
                alt="Company"
              />
            </Col>
            <Col span={6}>
              <img
                width="180px"
                src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"
                alt="Company"
              />
            </Col>
            <Col span={6}></Col>
          </Row>
        </div>
        <div className={classes.company_box}>
          <Title level={4}>복리후생</Title>
          <Row style={{ margin: 30 }}>
            <Col span={8}>
              <Row>
                <Col span={10}>
                  <GiftOutlined style={{ fontSize: '60px' }} />
                </Col>
                <Col span={14}>
                  <Text strong className={classes.company_support_subtitle}>
                    연금/보험
                  </Text>
                  <br />
                  <Text>국민연금</Text>
                  <br />
                  <Text>고용보험</Text>
                  <br />
                  <Text>산재보험</Text>
                  <br />
                  <Text>건강보험</Text>
                  <br />
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row>
                <Col span={10}>
                  <HomeOutlined style={{ fontSize: '60px' }} />
                </Col>
                <Col span={14}>
                  <Text strong className={classes.company_support_subtitle}>
                    휴무/휴가/행사
                  </Text>
                  <br />
                  <Text>주5일근무</Text>
                  <br />
                  <Text>연차</Text>
                  <br />
                  <Text>월차</Text>
                  <br />
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row>
                <Col span={10}>
                  <DollarOutlined style={{ fontSize: '60px' }} />
                </Col>
                <Col span={14}>
                  <Text strong className={classes.company_support_subtitle}>
                    보상/수당지원
                  </Text>
                  <br />
                  <Text>퇴직금</Text>
                  <br />
                  <Text>경조금지원</Text>
                  <br />
                  <Text>장기근속자포상</Text>
                  <br />
                  <Text>우수사원 표창/포상</Text>
                  <br />
                  <Text>야근수당</Text>
                  <br />
                  <Text>연월차수당</Text>
                  <br />
                  <Text>자사/자회사/계열사 제품 할인</Text>
                  <br />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ margin: 30 }}>
            <Col span={8}>
              <Row>
                <Col span={10}>
                  <CoffeeOutlined style={{ fontSize: '60px' }} />
                </Col>
                <Col span={14}>
                  <Text strong className={classes.company_support_subtitle}>
                    사내시설
                  </Text>
                  <br />
                  <Text>휴게실</Text>
                  <br />
                  <Text>카페테리아</Text>
                  <br />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
            <Col span={8}></Col>
          </Row>
        </div>
        <div className={classes.company_box}>
          <Title level={4}>기업위치</Title>
          <div>
            <Table pagination={false} style={{ padding: 30 }} columns={companyAddrColumns} dataSource={companyAddr} />
          </div>
        </div>
      </>
    );
  }
}

const companyAddrColumns = [
  {
    title: '지점명',
    dataIndex: 'branch',
    key: 'branch',
  },
  {
    title: '주소',
    dataIndex: 'addr',
    key: 'addr',
  },
];

const companyAddr = [
  {
    key: '1',
    branch: '본사',
    addr: '경기도 성남시 대왕판교로 123번길 유스페이스2차 8층',
  },
  {
    key: '2',
    branch: '지사',
    addr: '서울시 강남구 청담동 하수구앞 박스',
  },
  {
    key: '3',
    branch: '지점명',
    addr: '그 지점의 주소',
  },
];

export default CompanyInfo;
