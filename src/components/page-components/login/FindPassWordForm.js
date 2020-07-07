import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import classes from './FindPassWordForm.module.less';
import Logo from './../../common-components/layout/Logo/Logo';

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

class FindPassWordForm extends Component {
  findPassWord = () => {
    console.log('비밀번호찾기');
  };

  render() {
    return (
      <>
        <Row style={{ marginTop: 100 }}>
          <Col span={2} style={{ marginTop: 5 }}>
            <Logo />
          </Col>
          <Col span={4}>
            <span style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 15, color: 'black' }}>비밀번호찾기</span>
          </Col>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Col span={24}>
            <div>
              <h4>회원정보 입력</h4>
              <h5>회원구분별로 가입 시 입력한 본인정보를 입력해주세요.</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div className={classes.form_box}>
              <h2 className={classes.form_text}>일반회원</h2>
              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item name="email" rules={[{ required: true, message: '이메일(아이디)을 입력 해주세요.' }]}>
                  <Input placeholder="이메일을 입력하세요." style={{ width: 300 }} />
                </Form.Item>

                <Form.Item name="userName" rules={[{ required: true, message: '이름을 작성 해주세요.' }]}>
                  <Input placeholder="이름을 입력하세요." style={{ width: 300 }} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit" onClick={this.findPassWord}>
                    비밀번호 찾기
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col span={12}>
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
                  <Input placeholder="이메일을 입력하세요." style={{ width: 300 }} />
                </Form.Item>

                <Form.Item name="companyName" rules={[{ required: true, message: '기업명을 입력 해주세요.' }]}>
                  <Input placeholder="기업명을 입력하세요" style={{ width: 300 }} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit" onClick={this.findPassWord}>
                    비밀번호 찾기
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default FindPassWordForm;
