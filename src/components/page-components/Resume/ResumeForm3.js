import React, { Component } from 'react';
import { Input, Form, Button, Space, DatePicker } from 'antd';
import { MinusCircleOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons';
import './Resume.css';
import ResumeFormTop from './ResumeFormTop';
import { Link } from 'react-router-dom';

class ResumeForm3 extends Component {
  DateonChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <>
        <div>
          <ResumeFormTop />
          <h2>자격증</h2>
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
                            style={{ width: 350, height: 60 }}
                            placeholder="자격증명"
                            prefix={<InboxOutlined className="site-form-item-icon" />}
                          />
                        </Form.Item>
                        <Form.Item>
                          <DatePicker
                            onChange={this.DateonChange}
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
          <Link to="/resumeLanguageAbility">
            <Button type="primary" htmlType="button" style={{ width: 150, height: 40, marginBottom: 50 }}>
              다음
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export default ResumeForm3;
