import React, { Component } from 'react';
import { Input, Select, Form, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined, BankOutlined } from '@ant-design/icons';
import './Resume.css';
import ResumeFormTop from './ResumeFormTop';
import { Link } from 'react-router-dom';

class ResumeForm2 extends Component {
  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  render() {
    const { Option } = Select;
    const { TextArea } = Input;
    return (
      <>
        <div>
          <ResumeFormTop />
          <h2>경력사항</h2>
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
                          <Select defaultValue="고용형태" onChange={this.handleChange} className="school">
                            <Option value="FullTime">정규직</Option>
                            <Option value="ContractWorker">계약직</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item>
                          <Input
                            style={{ width: 230, height: 60 }}
                            placeholder="회사명"
                            prefix={<BankOutlined className="site-form-item-icon" />}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Input placeholder="부서" style={{ width: 127, height: 60 }} />
                        </Form.Item>
                        <Form.Item>
                          <Input placeholder="직위" style={{ width: 90, height: 60 }} />
                        </Form.Item>
                        <Form.Item>
                          <Select defaultValue="재직여부" onChange={this.handleChange} className="school">
                            <Option value="now">재직</Option>
                            <Option value="rest">휴직</Option>
                            <Option value="no">퇴직</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item>
                          <Select defaultValue="재직기간" onChange={this.handleChange} className="school">
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
                        <Form.Item>
                          <Input placeholder="담당업무" style={{ width: 910, height: 60 }} />
                        </Form.Item>
                        <Form.Item>
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
          <Link to="/resumecertificate">
            <Button type="primary" htmlType="button" style={{ width: 150, height: 40, marginBottom: 50 }}>
              다음
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export default ResumeForm2;
