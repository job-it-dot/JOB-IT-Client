import React, { Component } from 'react';
import classes from './Company.module.less';
import kosta from './../../../assets/kosta.png';
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
              <Text>IT</Text>
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
              <Text>2012년 08월(8년차)</Text>
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
              <Text>이단형</Text>
            </Col>
            <Col span={2}>
              <Text type="secondary">주요사업</Text>
            </Col>
            <Col span={10}>
              <Text>SW 개발 및 공급</Text>
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
              <Link>http://edu.kosta.or.kr/</Link>
            </Col>
          </Row>
          <Row className={classes.company_info_row}>
            <Col span={2}>
              <Text type="secondary">주소</Text>
            </Col>
            <Col span={10}>
              <Text>서울시 강남구 테혜란로 1 8층</Text>
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
    title: '2020년 KOSTA 기업분석(최신)',
    date: '2020.03.25',
    origin: 'JOB IT 기업분석팀',
  },
  {
    key: '2',
    title: '2020년 KOSTA 사업계획서',
    date: '2020.02.01',
    origin: 'JOB IT 기업분석팀',
  },
  {
    key: '3',
    title: '2019년 KOSTA 기업분석(사업,전망)',
    date: '2019.02.25',
    origin: 'JOB IT 기업분석팀',
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
          <Text>2008년 12월 주식회사 KOSTA 창립(강남)</Text>
          <br />
          <Text>2015년 7월 가산 센터 설립</Text>
          <br />
          <Text>경기도 의회 의장상 수상</Text>
          <br />
          <Text>ISO 9001</Text>
          <br />
          <Text>벤처기업 인증</Text>
          <br />
          <Text>소비자 만족지수 2016,2017,2018연속 수상</Text>
          <br />
          <Text>2019년 교육생이 뽑은 최고의 교육기관 수상</Text>
          <br />
          <Text>소비자 만족지수 2016,2017,2018연속 수상</Text>
          <Text></Text>
        </div>
      </>
    );
  }
}

const recruitData = [
  '2020년 상반기 코스타 직원 채용(신입/경력)',
  '2020년 코스타 각 부문 수시 채용',
  '2020년 코스타 교육 연구원 채용(경력)',
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
          <Text>경기도 의회 의장상 수상</Text>
          <br />
          <Text>우수 교육기관 인증</Text>
          <br />
          <Text>PKI 8400</Text>
          <br />
          <Text>벤처기업 인증</Text>
          <br />
          <Text>소비자 만족지수 2016,2017,2018연속 수상</Text>
        </div>
        <div className={classes.company_box}>
          <Title level={4}>사진/동영상</Title>
          <Row>
            <Col span={6}>
              <img
                width="300px"
                src={kosta}
                alt="Company"
                height="200"
              />
            </Col>
            {/* <Col span={6}>
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
            </Col> */}
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
    addr: '서울시 강남구 테혜란로 1 8층',
  },
  {
    key: '2',
    branch: '지사',
    addr: '서울 금천구 가산디지털1로 181 가산 더블유센터 3층 308호',
  },
  {
    key: '3',
    branch: '지점명',
    addr: '코스타(가산지점)',
  },
];

export default CompanyInfo;
