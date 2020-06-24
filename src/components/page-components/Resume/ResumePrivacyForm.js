import React, { Component } from 'react';
import { Input, DatePicker, Select, Row, Col, Form, Button, Space } from 'antd';
import {
  UserOutlined,
  MobileOutlined,
  HomeOutlined,
  SearchOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import './Resume.css';
import { Link } from 'react-router-dom';
import ResumeFormTop from './ResumeFormTop';

class ResumePrivacyForm extends Component {
  state = {
    current: 0,
  };

  setCurrent = (current) => {
    this.setState({ current });
    // this.props.history.push('/');
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
  };

  render() {
    const { Option } = Select;
    return (
      <>
        <div>
          <ResumeFormTop current={this.state.current} setCurrent={this.setCurrent} />
          <Row>
            <Col span={50}>
              <h2>개인정보</h2>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col span={5.5}>
              <Input
                placeholder="이름"
                prefix={<UserOutlined className="site-form-item-icon" />}
                disabled
                style={{ width: 250, height: 60, marginRight: 20 }}
              />
            </Col>
            <Col span={5.5}>
              <Input
                placeholder="휴대폰번호"
                prefix={<MobileOutlined className="site-form-item-icon" />}
                disabled
                style={{ width: 250, height: 60, marginRight: 20 }}
              />
            </Col>
            <Col span={5.5}>
              <DatePicker
                placeholder="생년월일"
                onChange={this.onDateChange}
                style={{ width: 250, height: 60, marginRight: 20 }}
              />
            </Col>
            <Col span={5.5}>
              <Select defaultValue="성별" onChange={this.handleChange} className="large">
                <Option value="man">남자</Option>
                <Option value="woman">여자</Option>
              </Select>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col span={16}>
              <Input
                placeholder="주소"
                prefix={<HomeOutlined className="site-form-item-icon" />}
                suffix={
                  <button onClick={this.importaddress} style={{ backgroundColor: 'white', border: 0 }}>
                    <SearchOutlined />
                  </button>
                }
                style={{ width: 920, height: 60, marginRight: 20 }}
              />
            </Col>
          </Row>
          <Row>
            <Col span={25}>
              <h2>학력</h2>
            </Col>
          </Row>
          <Form name="dynamic_form_nest_item" onFinish={this.onFinish} autoComplete="off" className="EducationForm">
            <Form.List name="users">
              {(fields, { add, remove }) => {
                return (
                  <div>
                    {fields.map((field) => (
                      <Space
                        key={field.key}
                        style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 2 }}
                        align="start"
                      >
                        <Form.Item>
                          <Select defaultValue="학교구분" onChange={this.handleChange} className="school">
                            <Option value="HighSchool">고등학교</Option>
                            <Option value="JuniorCollege">대학(2,3년)</Option>
                            <Option value="University">대학교(4년)</Option>
                            <Option value="GraduateSchool">대학원</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item>
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
                        <Form.Item>
                          <DatePicker
                            onChange={this.onDateChange}
                            picker="month"
                            placeholder="입학년월"
                            style={{ width: 160, height: 60 }}
                          />
                        </Form.Item>
                        <Form.Item>
                          <DatePicker
                            onChange={this.onDateChange}
                            picker="month"
                            placeholder="졸업년월(예정)"
                            style={{ width: 160, height: 60 }}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Select defaultValue="졸업상태" onChange={this.handleChange} className="school">
                            <Option value="end">졸업</Option>
                            <Option value="soonEnd">졸업예정</Option>
                            <Option value="now">재학</Option>
                            <Option value="out">중퇴</Option>
                            <Option value="complete">수료</Option>
                            <Option value="rest">휴학</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item>
                          <Input placeholder="전공명" style={{ width: 310, height: 60 }} />
                        </Form.Item>
                        <Form.Item>
                          <Input placeholder="학점" style={{ width: 75, height: 60 }} />
                        </Form.Item>
                        <Form.Item>
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
          <Link to="/resumeCareer">
            <Button
              type="primary"
              htmlType="button"
              value="1"
              style={{ width: 150, height: 40, marginBottom: 50 }}
              onClick={this.resumeChange}
            >
              다음
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export default ResumePrivacyForm;
