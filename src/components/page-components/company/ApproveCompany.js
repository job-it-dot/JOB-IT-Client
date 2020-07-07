import React, { Component } from 'react';
import { Row, Col } from 'antd';
// import CompanyAproveForm from '../components/page-components/CompanyApprove/CompanyAproveForm';
// import ShowApplyForm from '../components/page-components/ApplyList/ShowApplyForm.js';
import { UserAddOutlined, RightOutlined, NotificationOutlined } from '@ant-design/icons';
import classes from './companyMain.module.less';

import { Radio, Typography } from 'antd';
import { Form, Input, Button } from 'antd';
import { List } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;
const { Title, Text } = Typography;

const data = [
  {
    title: '쉽고 효과적인 "AI면접" 런칭',
  },
  {
    title: '[이벤트]퀴즈 이벤트 #6 잡IT 마케팅 인턴쉽 이름은?',
  },
  {
    title: '[당첨자발표] 출석체크 이벤트 1주차 당첨자를 발표 합니다..',
  },
];
const faq = [
  {
    title: '로그인 상태 유지란?',
  },
  {
    title: '회원가입이 되지 않는데 어떻게 하나요?',
  },
  {
    title: '아이핀(I-Pin)이란 무엇인가요?',
  },
];

class ApproveCompany extends Component {
  state = {
    key: '1',
  };

  handleClick = (e) => {
    console.log(e.key);
    this.setState({ key: e.key });
    console.log(this.state.key);
  };

  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    // let page = null;
    // if(this.state.key === "1"){
    //   page =<CompanyAproveForm/>;
    // }
    // if(this.state.key === "2"){
    //   page = <ShowApplyForm/>
    // }

    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 19,
      },
    };

    return (
      <>
        <Row style={{ marginTop: 30 }}>
          <Col span={7} className={classes.secondbox} style={{ marginRight: 20 }}>
            <Row>
              <Col span={3} style={{ height: 100, marginRight: 20 }}>
                <UserAddOutlined style={{ fontSize: 45, marginTop: 35, marginLeft: 10 }} />
              </Col>
              <Col span={9} style={{ height: 100 }}>
                <Row style={{ height: 50, width: 700 }}>
                  <Col span={9}>
                    <Title level={4} style={{ marginTop: 30, marginLeft: 10 }}>
                      채용공고등록 &nbsp;
                      <RightOutlined />
                    </Title>
                  </Col>
                </Row>
                <Row style={{ height: 50, width: 700 }}>
                  <Col span={9}>
                    <Text type={'secondary'} style={{ float: 'left', fontSize: 20, marginTop: 20, marginLeft: 6 }}>
                      간편하게 채용공고를
                      <br />
                      등록 하고 여러 지원자
                      <br />
                      들의 이력서를 받아요.
                      <br />
                    </Text>
                    <Button style={{ height: 70, marginTop: 7, marginLeft: 10, width: 190 }}>공고 등록 하기</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col span={7} className={classes.thbox} style={{ marginLeft: 16 }}>
            <Link to="">
              <Row>
                <Col span={3} style={{ height: 100, marginRight: 20 }}>
                  <NotificationOutlined style={{ fontSize: 45, marginTop: 35, marginLeft: 1, marginRight: 30 }} />
                </Col>
                <Col span={9} style={{ height: 100 }}>
                  <Row style={{ height: 50, width: 700 }}>
                    <Col span={9}>
                      <Title level={4} style={{ marginTop: 30, marginLeft: 10 }}>
                        헤드헌팅 의뢰&nbsp;
                        <RightOutlined />
                      </Title>
                    </Col>
                  </Row>
                  <Row style={{ height: 50, width: 700 }}>
                    <Col span={9}>
                      <Text type={'secondary'} style={{ float: 'left', fontSize: 20, marginTop: 20, marginLeft: 6 }}>
                        후보자의 조건을 알려
                        <br />
                        주세 요. 최적의 후보자
                        <br />를 연결 시켜드립니다.
                      </Text>
                      <Button style={{ height: 70, marginTop: 7, marginLeft: 10, width: 190 }}>헌팅 의뢰</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Link>
          </Col>
          <Col span={8} className={classes.secondbox} style={{ marginLeft: 4 }}>
            <Row>
              <Title level={4} style={{ marginTop: 13, marginLeft: 20 }}>
                로그인
              </Title>
            </Row>
            <Row>
              <Radio.Group onChange={this.onChange} value={this.state.value} style={{ marginLeft: 20 }}>
                <Radio value={'company'}>기업</Radio>
                <Radio value={'headhunt'}>파견/대행</Radio>
                <Radio value={'edu'}>교육기관</Radio>
              </Radio.Group>
            </Row>
            <Row>
              <Col span={24}>
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: '이메일을 입력 해주세요.',
                      },
                    ]}
                  >
                    <Input placeholder="이메일" style={{ marginLeft: 20, marginTop: 10 }} />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: '비밀번호를 입력해주세요.!',
                      },
                    ]}
                  >
                    <Input.Password placeholder="비밀번호" style={{ marginLeft: 20 }} />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit" style={{ marginLeft: 20, width: 243 }}>
                      로그인
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              {/* <Col span={6} style={{ marginTop: 10 }}>
                <Button
                  style={{
                    paddingBottom: 83,
                    position: 'absolute',
                    paddingRight: 8,
                    textAlign: 'left',
                    verticalAlign: 'middle',
                    lineHeight: 4,
                    fontSize: 20,
                  }}
                >
                  로그인
                </Button>
              </Col> */}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={15} className={classes.secondbox}>
            <Row>
              {' '}
              <Title type="secondary" level={4} style={{ marginTop: 13, marginLeft: 20 }}>
                기업 라운지&nbsp;
                <RightOutlined />
              </Title>
            </Row>
            <Row>
              <a href="http://www.jobkorea.co.kr/Corp/Lounge/News_View?GI_Trend_News_No=236">
                <img
                  src="http://file1.jobkorea.co.kr/Corp/Lounge/News/Imgs/231-240/236/hr_banner_215_112_0629.jpg"
                  alt="X"
                  style={{ marginLeft: 20, width: 255 }}
                ></img>
              </a>

              <a href="http://www.jobkorea.co.kr/Corp/Lounge/News_View?GI_Trend_News_No=235">
                <img
                  src="http://file1.jobkorea.co.kr/Corp/Lounge/News/Imgs/231-240/235/hr_banner_215_112_06_1.jpg"
                  alt="X"
                  style={{ marginLeft: 20, width: 255 }}
                ></img>
              </a>
            </Row>
            <Row>
              <Text style={{ float: 'left', fontSize: 15, marginLeft: 20, marginTop: 10 }}>
                "지시가 없었으니깐 안했죠" 김...
              </Text>
              <Text style={{ float: 'left', fontSize: 15, color: '', marginLeft: 65, marginTop: 10 }}>
                "회사 사정이 어려워" 복리후생...
              </Text>
            </Row>
            <Row>
              <a href="http://www.jobkorea.co.kr/Corp/Lounge/News_View?GI_Trend_News_No=234">
                <img
                  src="http://file1.jobkorea.co.kr/Corp/Lounge/News/Imgs/231-240/234/hr_banner_215_112_06_4.jpg"
                  alt="X"
                  style={{ marginLeft: 20, marginTop: 20, width: 255 }}
                ></img>
              </a>
              <a href="http://www.jobkorea.co.kr/Corp/Lounge/forum_View?W_No=86">
                {' '}
                <img
                  src="http://file1.jobkorea.co.kr/Corp/Lounge/HRforum/Imgs/81-90/86/hr_banner_215_112.jpg"
                  alt="X"
                  style={{ marginLeft: 20, marginTop: 20, width: 255 }}
                ></img>
              </a>
            </Row>
            <Row>
              <Text style={{ float: 'left', fontSize: 15, marginLeft: 20, marginTop: 10 }}>
                22일부터 '코로나' 긴급 고용안정...
              </Text>
              <Text style={{ float: 'left', fontSize: 15, marginLeft: 50, marginTop: 10 }}>
                [공지사항]2020 잡IT HR포럼세미나...
              </Text>
            </Row>
            <Row>
              <a href="http://www.jobkorea.co.kr/help/notice/view?no=14193">
                <img
                  src="https://apple.contentsfeed.com/RealMedia/ads/Creatives/jobkorea/200316_corona19_cmddi/0316_bann_889x104.jpg"
                  alt="X"
                  style={{ marginTop: 20, width: 535, marginLeft: 20, height: 100 }}
                ></img>
              </a>
            </Row>
            <br></br>
            <Row>
              <Title level={4} style={{ marginTop: 25, marginLeft: 20, textAlign: 'center' }}>
                도움이 필요하신가요?
              </Title>
              <Search
                placeholder="궁금하신 내용을 입력하세요. 예)공고등록"
                onSearch={(value) => console.log(value)}
                style={{ width: 320, marginLeft: 20, marginTop: 20 }}
              />
            </Row>

            {/* <hr style={{color:"white"}}></hr> */}
            <Row>
              <Col span={12}>
                <Title level={4} style={{ marginTop: 25, marginLeft: 20, textAlign: 'left' }}>
                  공지사항
                </Title>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={<a href="https://www.naver.com">{item.title}</a>}
                        style={{ marginLeft: 20 }}
                      />
                    </List.Item>
                  )}
                />
              </Col>
              <Col span={11}>
                <Title level={4} style={{ marginTop: 25, marginLeft: 20, textAlign: 'left' }}>
                  FAQ
                </Title>
                <List
                  itemLayout="horizontal"
                  dataSource={faq}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={<a href="https://www.naver.com">{item.title}</a>}
                        style={{ marginLeft: 20 }}
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Col>
          <Col span={8} style={{ marginLeft: 10 }} className={classes.secondbox}>
            <Row>
              <Title level={4} style={{ marginTop: 25, marginLeft: 20, textAlign: 'left' }}>
                고객센터
              </Title>
              <Title level={4} style={{ marginTop: 25, marginLeft: 20, textAlign: 'left', color: 'blue' }}>
                1588-1588
              </Title>
              <br />
              <Text style={{ float: 'left', fontSize: 15, marginLeft: 20, marginTop: 5 }}>
                평일 09:00~19:00 토요일 ~ 15:00
              </Text>
              <br />
              <Text style={{ float: 'left', fontSize: 15, marginLeft: 20, marginTop: 5 }}>Fax : 02-565-9958</Text>
              <br />
              <Text style={{ float: 'left', fontSize: 15, marginLeft: 20, marginTop: 5 }}>
                E-mail : helpdesk@jobit.co.kr
              </Text>
              <br />
              <Button style={{ textAlign: 'center', marginTop: 25, marginLeft: 70 }}>서비스 문의</Button>
            </Row>
            <Row>
              <Title level={4} style={{ marginTop: 25, marginLeft: 20, textAlign: 'left' }}>
                기업러닝 추천강좌
              </Title>
              <Link to='' underline="true" style={{ marginTop: 30, marginLeft: 10 }}>
                자세히 보기
              </Link>
              <a href="http://nowdemo.jobkorea.co.kr/preview/index/BC7232F3-840D-4FCD-AC03-D5F105A242DD">
                <img
                  src="http://file1.jobkorea.co.kr/Now/SN_Pplr_Lecture_Img/2020/6/godtos_hslv621(0).png"
                  alt="X"
                  style={{ width: 250, marginLeft: 20, marginRight: 50 }}
                ></img>
              </a>
            </Row>
            <Row>
              <a href="http://nowdemo.jobkorea.co.kr/preview/index/3F840094-DEDF-4C6D-99BC-0E714DF9B5E4">
                <img
                  src="http://file1.jobkorea.co.kr/Now/SN_Pplr_Lecture_Img/2020/6/Int_addictToon1.png"
                  alt="X"
                  style={{ width: 250, marginLeft: 20, marginRight: 50, marginTop: 30 }}
                ></img>
              </a>
            </Row>
            <Row>
              <a href="http://nowdemo.jobkorea.co.kr/preview/index/29636165-FA8B-410D-878D-F3797A8C1C10">
                <img
                  src="http://file1.jobkorea.co.kr/Now/SN_Pplr_Lecture_Img/2020/6/FastTrack1.png"
                  alt="X"
                  style={{ width: 250, marginLeft: 20, marginRight: 50, marginTop: 30 }}
                ></img>
              </a>
            </Row>
            <Row>
              <img
                src="http://file1.jobkorea.co.kr/main/Bnnr/Imgs/bann04.png"
                alt="X"
                style={{ marginLeft: 20, marginTop: 20, marginBottom: 20, width: 250 }}
              ></img>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}
export default ApproveCompany;
