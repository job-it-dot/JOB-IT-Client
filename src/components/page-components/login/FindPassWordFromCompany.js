import React, { Component } from 'react';

import { Form, Input, Button } from 'antd';
import classes from './FindPassWordForm.module.less';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 5,
  },
};
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

class FindPassWordFormCompany extends Component {
  render() {
    return (
      <>
        <div className={classes.form_box}>
          <h2 className={classes.form_text}>기업회원</h2>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item name="email" rules={[{ required: true, message: '이메일(아이디)을 입력 해주세요.' }]}>
              <Input placeholder="이메일을 입력 해주세요." />
            </Form.Item>

            <Form.Item label="기업명" name="companyName" rules={[{ required: true, message: '이름을 작성 해주세요.' }]}>
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                비밀번호 찾기
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    );
  }
}

export default FindPassWordFormCompany;
