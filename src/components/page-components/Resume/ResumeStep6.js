import React, { Component } from 'react';
import { Input, Form, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './Resume.css';
import ResumeFormTop from './ResumeTop';
import { Link, withRouter } from 'react-router-dom';

class ResumeStep6 extends Component {
  state = {
    current: 5,
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
    const { TextArea } = Input;
    return (
      <>
        <div>
          <ResumeFormTop current={this.state.current} setCurrent={this.setCurrent} />
          <h2>자기소개서</h2>
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
                          <Input placeholder="제목" style={{ width: 880, height: 60 }} />
                        </Form.Item>
                        <Form.Item>
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
}

export default withRouter(ResumeStep6);
