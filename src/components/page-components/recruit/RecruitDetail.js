import React, { Component } from 'react';
import { Row, Col, Tooltip, Progress, Typography, Button, Tabs, Table, Tag } from 'antd';
import classes from './RecruitDetail.module.less';
import './Recruit.css';
import testimg from './../../../assets/kosta.png';
import { CheckOutlined, StarOutlined, HeartOutlined, ReconciliationOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { TabPane } = Tabs;

const data = [
  {
    key: '1',
    name: 'Front End',
    responsibility: '프론트앤드 개발 , SpringBoot FrameWork 사용가능자',
    qualifications: '경력(4년이상)',
    address: '코스타 판교',
    tags: ['React', 'developer'],
  },
  {
    key: '2',
    name: 'Back End',
    responsibility: '백앤드 개발',
    qualifications: '신입/경력(1년미만)',
    address: '코스타 판교',
    tags: ['Java'],
  },
  {
    key: '3',
    name: 'Front End',
    responsibility: '프론트앤드 개발',
    qualifications: '신입',
    address: '코스타 판교',
    tags: ['JQuery', 'TypeScript', 'React', 'Spring Boot'],
  },
];

const columns = [
  {
    title: 'Position',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Responsibilities',
    dataIndex: 'responsibility',
    key: 'responsibility',
  },
  {
    title: 'Preferred Qualifications',
    dataIndex: 'qualifications',
    key: 'qualifications',
  },
  {
    title: 'One`s place of Work',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 8 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

class RecruitDetail extends Component {
  callback = (key) => {
    console.log(key);
  };

  support = () => {
    console.log('지원하기');
  };

  scrap = () => {
    console.log('스크랩하기');
  };

  render() {
    return (
      <>
        <h2 style={{ marginTop: 15 }}>채용정보</h2>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginTop: 5, marginBottom: 15 }}>
          <Col span={18} push={6} className="recruitTop">
            <div className={classes.recruit_style}>
              <div>
                <h1 style={{ fontSize: 23 }}>(주)코스타</h1>
              </div>
              <div>
                <h1 className={classes.recruit_title}>2020년도 업무지원직 직원 채용(촬영,국공유 실태조사,사무지원)</h1>
              </div>
              <Row style={{ padding: 10 }}>
                <Col span={12}>
                  <h3>지원자격</h3>
                  <p>
                    <span className={classes.recruit_name}>경력</span>{' '}
                    <span className={classes.recruit_subtitle} style={{ color: 'blue' }}>
                      신입·경력
                    </span>
                  </p>
                  <p>
                    <span className={classes.recruit_name}>학력</span>{' '}
                    <span className={classes.recruit_subtitle} style={{ color: 'blue' }}>
                      학력무관
                    </span>
                  </p>
                  <p>
                    <span className={classes.recruit_name}>우대</span>{' '}
                    <span className={classes.recruit_subtitle}>기본우대</span>
                  </p>
                </Col>
                <Col span={12}>
                  <h3>근무조건</h3>
                  <p>
                    <span className={classes.recruit_name}>고용형태</span>{' '}
                    <span className={classes.recruit_subtitle} style={{ color: 'blue' }}>
                      정규직
                    </span>{' '}
                    <span className={classes.recruit_subtitle}>수습기간협의</span>
                  </p>
                  <p>
                    <span className={classes.recruit_name}>급여</span>{' '}
                    <span className={classes.recruit_subtitle}>회사내규에 따름 - 면접 후 결정</span>
                  </p>
                  <p>
                    <span className={classes.recruit_name}>지역</span>{' '}
                    <span className={classes.recruit_subtitle}>서울시 강남구</span>
                  </p>
                  <p>
                    <span className={classes.recruit_name}>시간</span>{' '}
                    <span className={classes.recruit_subtitle}>주5일(월~금)</span>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={6} pull={18} className="recruitTop">
            <div className={classes.recurit_company}>
              <Row className="img">
                <Col span={24}>
                  <img className={classes.recurit_company_img} src={testimg} alt="company" />
                </Col>
              </Row>
              <Row style={{ padding: 10 }} className="row">
                <Col span={24}>
                  <div className={classes.recruit_companyInfo}>
                    <h3>기업정보</h3>
                    <p>
                      <span className={classes.recruit_name}>산업(업종)</span>{' '}
                      <span className={classes.card_detail}>IT기업</span>
                    </p>
                    <p>
                      <span className={classes.recruit_name}>사원수</span>{' '}
                      <span className={classes.card_detail}>250명</span>
                    </p>
                    <p>
                      <span className={classes.recruit_name}>설립년도</span>{' '}
                      <span className={classes.card_detail}>2012년(8년차)</span>
                    </p>
                    <p>
                      <span className={classes.recruit_name}>기업형태</span>{' '}
                      <span className={classes.card_detail}>중소기업</span>
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row
          justify="space-around"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{ marginBottom: 30, marginTop: 20 }}
        >
          <Col span={7}>
            <Button
              block
              size={'large'}
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.support}
              style={{ height: 50, backgroundColor: '#FF7A21', border: 1 }}
            >
              <CheckOutlined />
              즉시지원
            </Button>
          </Col>
          <Col span={7}>
            <Button
              block
              size={'large'}
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.scrap}
              style={{ height: 50, backgroundColor: '#FF7A21', border: 1 }}
            >
              <StarOutlined />
              스크랩
            </Button>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginTop: 15, marginBottom: 15 }}>
          <Col span={24}>
            <Tabs onChange={this.callback} type="card" size="large">
              <TabPane tab="상세요강" key="1" className={classes.recruit_tabpane}>
                <Col span={24}>
                  <div className={classes.recruit_company_detail}>
                    <span className={classes.recruit_detail_span}>
                      <HeartOutlined /> 관심기업으로
                    </span>{' '}
                    <span className={classes.recruit_detail_span2}>5,448명 이상 찜한</span>{' '}
                    <span className={classes.recruit_detail_span}>선망받는 기업</span>
                    <br />
                    <span className={classes.recruit_detail_span}>
                      <ReconciliationOutlined /> 4대보험 가입정보 -{' '}
                    </span>
                    <span className={classes.recruit_detail_span2}>국민연금, 건강보험, 고용보험, 산재보험</span>
                  </div>
                  <div className={classes.details} stlye={{ marginBottom: 50 }}>
                    <img
                      alt="example"
                      src="https://t1.daumcdn.net/comis/jobs/images/logo/meta_career.png"
                      width="500px"
                      height="500px"
                    />
                    <br />
                    <br />
                    <br />
                    <span style={{ fontSize: 20 }}>
                      주식회사 코스타는 주사업인 제조업을 비롯하여 빌리엔젤과 평화다방 브랜드
                      <br />
                      (주)큐큐시스템, (주)에이폴드를 운영하는 회사입니다.
                    </span>
                  </div>
                  <div>
                    <Table columns={columns} dataSource={data} />
                  </div>
                </Col>
              </TabPane>
              <TabPane tab="접수기간/방법" key="2">
                <Col span={24}>접수기간/방법영역</Col>
              </TabPane>
              <TabPane tab="기업정보" key="3">
                <Col span={24}>기업정보영역</Col>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <div className={classes.recruit_detail}>상세요강</div>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <div className={classes.recruit_applicant}>
              지원자 수: xxx명
              <Row>
                <Col span={12}>
                  <Row>성별 현황:</Row>
                  <Row>
                    <Col span={12}>
                      <Tooltip title="남" className={classes.recruit_circle_progress}>
                        <Progress percent={60} successPercent={0} type="circle" />
                      </Tooltip>
                    </Col>
                    <Col span={12}>
                      <Tooltip title="여" className={classes.recruit_circle_progress}>
                        <Progress percent={40} successPercent={0} type="circle" strokeColor="red" />
                      </Tooltip>
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <div>연령별 현황: </div>
                  <div style={{ width: 400 }}>
                    20대 <Progress percent={30} size="small" />
                    30대 <Progress percent={50} size="small" strokeColor="red" />
                    40대 <Progress percent={20} size="small" strokeColor="purple" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <div className={classes.recruit_company_information}>
              기업정보
              <Row>
                <Col span={8}>
                  <img
                    src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg"
                    height="120px"
                    alt="company"
                  />
                </Col>
                <Col span={16}>
                  <Row>
                    <Col span={6}>
                      <Title level={4}>회사이름</Title>
                    </Col>
                    <Col span={18}>
                      <Text keyboard>Tag1</Text>
                      <Text keyboard>Tag2</Text>
                      <Text keyboard>Tag3</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12}> 1번항목</Col>
                    <Col span={12}> 2번항목</Col>
                  </Row>
                  <Row>
                    <Col span={12}> 3번항목</Col>
                    <Col span={12}> 4번항목</Col>
                  </Row>
                  <Row>
                    <Col span={12}> 5번항목</Col>
                    <Col span={12}> 6번항목</Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default RecruitDetail;
