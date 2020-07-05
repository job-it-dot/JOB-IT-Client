import React, { Component } from 'react';
import { Input, DatePicker, Select, Row, Col, Form, Button, Space, Upload, message } from 'antd';
import {
  UserOutlined,
  MobileOutlined,
  HomeOutlined,
  SearchOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  BankOutlined,
  InboxOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import './Resume.css';
import { Link } from 'react-router-dom';
import ResumeFormTop from './ResumeTop';
import axios from 'axios';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

class Resume extends Component {
  state = {
    current: 0,
  };

  onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  resumeChange = (current) => {
    this.setState({ current });
  };

  onChange = (current) => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  importaddress = () => {
    console.log('주소API');
  };

  importschool = () => {
    console.log('학교명API');
  };

  onFinish = (values) => {
    console.log('Received values of form:', values);
    if (values.userName != null) {
      console.log('개인정보등록');
      axios({
        method: 'post',
        url: 'http://api.jobit.co.kr:9595/개인정보등록',
        data: JSON.stringify({
          userName: values.userName,
          userPhone: values.phoneNumber,
          userBirthDay: values.birthDay._d,
          userGender: values.gender,
          userAddr: values.addr,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => console.log(res))
        .catch((res) => console.log(res));
    } else if (values.Education != null) {
      values.Education.map((_, index) =>
        axios({
          method: 'post',
          url: 'http://api.jobit.co.kr:9595/학력등록',
          data: JSON.stringify({
            classification: values.Education[index].schoolSelect,
            schoolName: values.Education[index].schoolName,
            firstDate: values.Education[index].firstDate._d,
            endDate: values.Education[index].endDate._d,
            schoolStatus: values.Education[index].schoolStatus,
            subject: values.Education[index].subject,
            score: values.Education[index].score,
            totalScore: values.Education[index].totalScore,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => console.log(res))
          .catch((res) => console.log(res))
      );
    } else if (values.carrer != null) {
      values.carrer.map((_, index) =>
        axios({
          method: 'post',
          url: 'http://api.jobit.co.kr:9595/경력등록',
          data: JSON.stringify({
            employment: values.carrer[index].employment,
            companyName: values.carrer[index].companyName,
            companyWorkingSpace: values.carrer[index].companyWorkingSpace,
            companyValue: values.carrer[index].companyValue,
            workingTime: values.carrer[index].workingTime,
            responsibilities: values.carrer[index].responsibilities,
            detailTechnology: values.carrer[index].detailTechnology,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => console.log(res))
          .catch((res) => console.log(res))
      );
    } else if (values.certificate != null) {
      values.certificate.map((_, index) =>
        axios({
          method: 'post',
          url: 'http://api.jobit.co.kr:9595/user/resume/insertLicense',
          data: JSON.stringify({
            certificateName: values.certificate[index].certificateName,
            certificateDate: values.certificate[index].certificateDate._d,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => console.log(res))
          .catch((res) => console.log(res))
      );
    } else if (values.language != null) {
      values.language.map((_, index) =>
        axios({
          method: 'post',
          url: 'http://api.jobit.co.kr:9595/어학능력',
          data: JSON.stringify({
            foreignLanguage: values.language[index].foreignLanguage,
            level: values.language[index].level,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => console.log(res))
          .catch((res) => console.log(res))
      );
    } else if (values.portfolio != null) {
      values.portfolio.map((_, index) =>
        values.portfolio[index].portfolioFile.fileList.map((_, index2) =>
          axios({
            method: 'post',
            url: 'http://api.jobit.co.kr:9595/포트폴리오',
            data: JSON.stringify({
              portfolioLink: values.portfolio[index].portfolioLink,
              portfolioFile: values.portfolio[index].portfolioFile.fileList[index2].name,
              portfolioFileSize: values.portfolio[index].portfolioFile.fileList[index2].size,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((res) => console.log(res))
            .catch((res) => console.log(res))
        )
      );
    } else if (values.AboutMe != null) {
      values.AboutMe.map((_, index) =>
        axios({
          method: 'post',
          url: 'http://api.jobit.co.kr:9595/자기소개서',
          data: JSON.stringify({
            selfIntroductionTitle: values.AboutMe[index].selfIntroductionTitle,
            selfIntroductionDetail: values.AboutMe[index].selfIntroductionDetail,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => console.log(res))
          .catch((res) => console.log(res))
      );
    }
  };

  render() {
    const { Option } = Select;
    const { TextArea } = Input;
    const current = this.state.current;
    let step = null;
    if (current === 0) {
      step = (
        <>
          <div>
            <Row>
              <Col span={50}>
                <h2>개인정보</h2>
              </Col>
            </Row>
            <Form name="basic" onFinish={this.onFinish}>
              <Row style={{ marginBottom: 10 }}>
                <Col span={5.5}>
                  <Form.Item name="userName" rules={[{ required: true, message: '이름을 입력해주세요' }]}>
                    <Input
                      placeholder="이름"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      style={{ width: 230, height: 60, marginRight: 20 }}
                    />
                  </Form.Item>
                </Col>

                <Col span={5.5}>
                  <Form.Item name="phoneNumber" rules={[{ required: true, message: '휴대폰번호를 입력해주세요' }]}>
                    <Input
                      placeholder="휴대폰번호"
                      prefix={<MobileOutlined className="site-form-item-icon" />}
                      style={{ width: 230, height: 60, marginRight: 20 }}
                    />
                  </Form.Item>
                </Col>
                <Col span={5.5}>
                  <Form.Item name="birthDay" rules={[{ required: true, message: '생년월일을 선택해주세요' }]}>
                    <DatePicker
                      placeholder="생년월일"
                      onChange={this.onDateChange}
                      style={{ width: 230, height: 60, marginRight: 20 }}
                    />
                  </Form.Item>
                </Col>
                <Col span={5.5}>
                  <Form.Item
                    name="gender"
                    initialValue="성별"
                    rules={[{ required: true, message: '성별을 선택해주세요' }]}
                  >
                    <Select onChange={this.handleChange} className="large">
                      <Option value="man">남자</Option>
                      <Option value="woman">여자</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row style={{ marginBottom: 10 }}>
                <Col span={16}>
                  <Form.Item name="addr" rules={[{ required: true, message: '주소를 입력해주세요' }]}>
                    <Input
                      placeholder="주소"
                      prefix={<HomeOutlined className="site-form-item-icon" />}
                      suffix={
                        <button onClick={this.importaddress} style={{ backgroundColor: 'white', border: 0 }}>
                          <SearchOutlined />
                        </button>
                      }
                      style={{ width: 860, height: 60, marginRight: 20 }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 150, height: 40, marginTop: 5 }}>
                  개인정보 저장
                </Button>
              </Form.Item>
            </Form>
            <Row>
              <Col span={25}>
                <h2>학력</h2>
              </Col>
            </Row>
            <Form name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="off" className="EducationForm">
              <Form.List name="Education">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field) => (
                        <Space
                          key={field.key}
                          style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 2 }}
                          align="start"
                        >
                          <Form.Item initialValue="학교구분" name={[field.name, 'schoolSelect']}>
                            <Select onChange={this.handleChange} className="school">
                              <Option value="HighSchool">고등학교</Option>
                              <Option value="JuniorCollege">대학(2,3년)</Option>
                              <Option value="University">대학교(4년)</Option>
                              <Option value="GraduateSchool">대학원</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item name={[field.name, 'schoolName']}>
                            <Input
                              style={{ width: 160, height: 60 }}
                              placeholder="학교명"
                              prefix={<HomeOutlined className="site-form-item-icon" />}
                              suffix={
                                <button onClick={this.importschool} style={{ backgroundColor: 'white', border: 0 }}>
                                  <SearchOutlined />
                                </button>
                              }
                            />
                          </Form.Item>
                          <Form.Item name={[field.name, 'firstDate']}>
                            <DatePicker
                              onChange={this.onDateChange}
                              picker="month"
                              placeholder="입학년월"
                              style={{ width: 160, height: 60 }}
                            />
                          </Form.Item>
                          <Form.Item name={[field.name, 'endDate']}>
                            <DatePicker
                              onChange={this.onDateChange}
                              picker="month"
                              placeholder="졸업년월(예정)"
                              style={{ width: 160, height: 60 }}
                            />
                          </Form.Item>
                          <Form.Item initialValue="졸업상태" name={[field.name, 'schoolStatus']}>
                            <Select onChange={this.handleChange} className="school">
                              <Option value="end">졸업</Option>
                              <Option value="soonEnd">졸업예정</Option>
                              <Option value="now">재학</Option>
                              <Option value="out">중퇴</Option>
                              <Option value="complete">수료</Option>
                              <Option value="rest">휴학</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item name={[field.name, 'subject']}>
                            <Input placeholder="전공명" style={{ width: 310, height: 60 }} />
                          </Form.Item>
                          <Form.Item name={[field.name, 'score']}>
                            <Input placeholder="학점" style={{ width: 75, height: 60 }} />
                          </Form.Item>
                          <Form.Item name={[field.name, 'totalScore']}>
                            <Input placeholder="총점" style={{ width: 75, height: 60 }} />
                          </Form.Item>
                          <MinusCircleOutlined
                            style={{ fontSize: 20, marginTop: 20 }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          block
                        >
                          <PlusOutlined /> 추가
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 150, height: 40 }}>
                  학력저장
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div style={{ float: 'right' }}>
            <Button
              type="primary"
              htmlType="button"
              value="1"
              style={{ width: 150, height: 40, marginBottom: 50 }}
              onClick={() => this.resumeChange(1)}
            >
              다음
            </Button>
          </div>
        </>
      );
    } else if (current === 1) {
      step = (
        <>
          <div>
            <h2>경력사항</h2>
            <Form name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="off" className="EducationForm">
              <Form.List name="career">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field) => (
                        <Space
                          key={field.key}
                          style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 2 }}
                          align="start"
                        >
                          <Form.Item initialValue="고용형태" name={[field.name, 'employment']}>
                            <Select onChange={this.handleChange} className="school">
                              <Option value="FullTime">정규직</Option>
                              <Option value="ContractWorker">계약직</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item name={[field.name, 'companyName']}>
                            <Input
                              style={{ width: 230, height: 60 }}
                              placeholder="회사명"
                              prefix={<BankOutlined className="site-form-item-icon" />}
                            />
                          </Form.Item>
                          <Form.Item name={[field.name, 'companyWorkingSpace']}>
                            <Input placeholder="부서" style={{ width: 127, height: 60 }} />
                          </Form.Item>
                          <Form.Item name={[field.name, 'companyValue']}>
                            <Input placeholder="직위" style={{ width: 90, height: 60 }} />
                          </Form.Item>
                          <Form.Item initialValue="재직여부" name={[field.name, 'nowWorking']}>
                            <Select onChange={this.handleChange} className="school">
                              <Option value="now">재직</Option>
                              <Option value="rest">휴직</Option>
                              <Option value="no">퇴직</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item initialValue="재직기간" name={[field.name, 'workingTime']}>
                            <Select onChange={this.handleChange} className="school">
                              <Option value="low_one">1년미만</Option>
                              <Option value="one">1~2년</Option>
                              <Option value="two">2~3년</Option>
                              <Option value="three">3~4년</Option>
                              <Option value="four">4~5년</Option>
                              <Option value="five">5~6년</Option>
                              <Option value="six">6~7년</Option>
                              <Option value="seven">7~8년</Option>
                              <Option value="over_seven">8년이상</Option>
                            </Select>
                          </Form.Item>
                          <Form.Item name={[field.name, 'responsibilities']}>
                            <Input placeholder="담당업무" style={{ width: 910, height: 60 }} />
                          </Form.Item>
                          <Form.Item name={[field.name, 'detailTechnology']}>
                            <TextArea rows={4} placeholder="상세기술" style={{ width: 880 }} />
                          </Form.Item>
                          <MinusCircleOutlined
                            style={{ fontSize: 20, marginTop: 40 }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          block
                        >
                          <PlusOutlined /> 추가
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 150, height: 40 }}>
                  경력저장
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div style={{ float: 'right' }}>
            <Button
              type="primary"
              htmlType="button"
              style={{ width: 150, height: 40, marginBottom: 50 }}
              onClick={() => this.resumeChange(2)}
              value="2"
            >
              다음
            </Button>
          </div>
        </>
      );
    } else if (current === 2) {
      step = (
        <>
          <div>
            <h2>자격증</h2>
            <Form name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="off" className="EducationForm">
              <Form.List name="certificate">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field) => (
                        <Space
                          key={field.key}
                          style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 2 }}
                          align="start"
                        >
                          <Form.Item name={[field.name, 'certificateName']}>
                            <Input
                              style={{ width: 350, height: 60 }}
                              placeholder="자격증명"
                              prefix={<InboxOutlined className="site-form-item-icon" />}
                            />
                          </Form.Item>
                          <Form.Item name={[field.name, 'certificateDate']}>
                            <DatePicker
                              onChange={this.onDateChange}
                              picker="month"
                              placeholder="취득년월"
                              style={{ width: 160, height: 60 }}
                            />
                          </Form.Item>
                          <MinusCircleOutlined
                            style={{ fontSize: 20, marginTop: 20 }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          block
                        >
                          <PlusOutlined /> 추가
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 150, height: 40 }}>
                  자격증저장
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div style={{ float: 'right' }}>
            <Button
              type="primary"
              htmlType="button"
              style={{ width: 150, height: 40, marginBottom: 50 }}
              onClick={() => this.resumeChange(3)}
              value="3"
            >
              다음
            </Button>
          </div>
        </>
      );
    } else if (current === 3) {
      step = (
        <>
          <div>
            <h2>어학능력</h2>
            <Form name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="off" className="EducationForm">
              <Form.List name="language">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field) => (
                        <Space
                          key={field.key}
                          style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 2 }}
                          align="start"
                        >
                          <Form.Item name={[field.name, 'foreignLanguage']}>
                            <Input
                              style={{ width: 200, height: 60 }}
                              placeholder="외국어명"
                              prefix={<InboxOutlined className="site-form-item-icon" />}
                            />
                          </Form.Item>
                          <Form.Item initialValue="수준" name={[field.name, 'level']}>
                            <Select onChange={this.handleChange} className="school">
                              <Option value="normal">일상회화</Option>
                              <Option value="business">비즈니스회화</Option>
                              <Option value="Fluency">유창함</Option>
                            </Select>
                          </Form.Item>
                          <MinusCircleOutlined
                            style={{ fontSize: 20, marginTop: 20 }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          block
                        >
                          <PlusOutlined /> 추가
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 150, height: 40 }}>
                  어학능력저장
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div style={{ float: 'right' }}>
            <Button
              type="primary"
              htmlType="button"
              style={{ width: 150, height: 40, marginBottom: 50 }}
              value="4"
              onClick={() => this.resumeChange(4)}
            >
              다음
            </Button>
          </div>
        </>
      );
    } else if (current === 4) {
      step = (
        <>
          <div>
            <h2>포트폴리오</h2>
            <Form name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="off" className="EducationForm">
              <Form.List name="portfolio">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field) => (
                        <Space
                          key={field.key}
                          style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 2 }}
                          align="start"
                        >
                          <Form.Item name={[field.name, 'portfolioLink']}>
                            <Input
                              style={{ width: 670, height: 60 }}
                              placeholder="링크(http://)"
                              prefix={<LinkOutlined className="site-form-item-icon" />}
                            />
                          </Form.Item>
                          <Form.Item valuePropName="fileList" name={[field.name, 'portfolioFile']}>
                            <Dragger {...props} style={{ width: 670 }}>
                              <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                              </p>
                              <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            </Dragger>
                          </Form.Item>
                          <MinusCircleOutlined
                            style={{ fontSize: 20, marginTop: 65 }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          block
                        >
                          <PlusOutlined /> 추가
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 150, height: 40 }}>
                  포트폴리오저장
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div style={{ float: 'right' }}>
            <Button
              type="primary"
              htmlType="button"
              style={{ width: 150, height: 40, marginBottom: 50 }}
              value="5"
              onClick={() => this.resumeChange(5)}
            >
              다음
            </Button>
          </div>
        </>
      );
    } else if (current === 5) {
      step = (
        <>
          <div>
            <h2>자기소개서</h2>
            <Form name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="off" className="EducationForm">
              <Form.List name="AboutMe">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map((field) => (
                        <Space
                          key={field.key}
                          style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 2 }}
                          align="start"
                        >
                          <Form.Item name={[field.name, 'selfIntroductionTitle']}>
                            <Input placeholder="제목" style={{ width: 880, height: 60 }} />
                          </Form.Item>
                          <Form.Item name={[field.name, 'selfIntroductionDetail']}>
                            <TextArea rows={4} placeholder="상세내용" style={{ width: 880 }} />
                          </Form.Item>
                          <MinusCircleOutlined
                            style={{ fontSize: 20, marginTop: 40 }}
                            onClick={() => {
                              remove(field.name);
                            }}
                          />
                        </Space>
                      ))}

                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => {
                            add();
                          }}
                          block
                        >
                          <PlusOutlined /> 추가
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{ width: 150, height: 40 }}>
                  자기소개서저장
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div style={{ float: 'right' }}>
            <Link to="/resumeResult">
              <Button type="primary" htmlType="button" style={{ width: 150, height: 40, marginBottom: 50 }}>
                완료
              </Button>
            </Link>
          </div>
        </>
      );
    }
    return (
      <>
        <div>
          <ResumeFormTop current={this.state.current} onChange={this.onChange} />
        </div>
        <div>{step}</div>
      </>
    );
  }
}

export default Resume;
