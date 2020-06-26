import React, { Component } from 'react';
import { Input, Form, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons';
import './Resume.css';
import ResumeFormTop from './ResumeTop';
import { Link, withRouter } from 'react-router-dom';

class ResumeStep4 extends Component {
  state = {
    current: 3,
  };
  setCurrent = (current) => {
    this.setState({ current });
    if (current === 0) {
      this.props.history.push('/resumePrivacy');
    } else if (current === 1) {
      this.props.history.push('/resumeCareer');
    } else if (current === 2) {
      this.props.history.push('/resumeCertificate');
    } else if (current === 3) {
      this.props.history.push('/resumeLanguageAbility');
    } else if (current === 4) {
      this.props.history.push('/resumePortfolio');
    } else if (current === 5) {
      this.props.history.push('/resumeAutobiography');
    }
  };

  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  render() {
    const { Option } = Select;
    return (
      <>
        <div>
          <ResumeFormTop current={this.state.current} setCurrent={this.setCurrent} />
          <h2>어학능력</h2>
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
                          <Input
                            style={{ width: 200, height: 60 }}
                            placeholder="외국어명"
                            prefix={<InboxOutlined className="site-form-item-icon" />}
                          />
                        </Form.Item>
                        <Form.Item>
                          <Select defaultValue="수준" onChange={this.handleChange} className="school">
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
          <Link to="/resumePortfolio">
            <Button type="primary" htmlType="button" style={{ width: 150, height: 40, marginBottom: 50 }}>
              다음
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export default withRouter(ResumeStep4);
