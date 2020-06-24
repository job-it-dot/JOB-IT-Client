import React, { Component } from 'react';
import { Input, Form, Button, Space, Upload, message } from 'antd';
import { MinusCircleOutlined, LinkOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons';
import './Resume.css';
import ResumeFormTop from './ResumeFormTop';
import { Link } from 'react-router-dom';

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

class ResumePortfolioForm extends Component {
  handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  render() {
    return (
      <>
        <div>
          <ResumeFormTop />
          <h2>포트폴리오</h2>
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
                            style={{ width: 670, height: 60 }}
                            placeholder="링크(http://)"
                            prefix={<LinkOutlined className="site-form-item-icon" />}
                          />
                        </Form.Item>
                        <Dragger {...props} style={{ width: 670 }}>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Dragger>
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
          <Link to="/resumeAutobiography">
            <Button type="primary" htmlType="button" style={{ width: 150, height: 40, marginBottom: 55 }}>
              다음
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export default ResumePortfolioForm;
