import React from 'react';
import { Button, Checkbox, Col, Divider, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import classes from './LoginForm.module.less';
import kakaologin from '../../../assets/kakaologin.png';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const kakaoLoginButton = () => {
    console.log('카카오로그인');
  };

  return (
    <Col xs={{ span: 24 }} sm={{ span: 12, offset: 6 }} md={{ span: 8, offset: 8 }}>
      <h1 className={classes.title}>
        친구에게 딱 맞는
        <br />
        회사를 추천해 주세요!
      </h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '아이디를 입력하세요',
            },
          ]}
        >
          <Input
            size={'large'}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="계정을 입력해 주세요"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '비밀번호를 입력하세요',
            },
          ]}
        >
          <Input
            size={'large'}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="비밀번호를 입력해 주세요"
          />
        </Form.Item>

        <div style={{ marginBottom: 8 }}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>자동 로그인</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="a" style={{ float: 'right' }}>
            비밀번호 찾기
          </a>
        </div>
        <Form.Item>
          <Button block size={'large'} type="primary" htmlType="submit" className="login-form-button">
            로그인
          </Button>
          <div style={{ marginTop: 8 }}>
            회원이 아니신가요? <Link to="/signup">회원가입</Link>
          </div>
        </Form.Item>
      </Form>
      <Divider />
      <div>
        <button onClick={kakaoLoginButton} className={classes.kakao_button}>
          <img src={kakaologin} height={50} alt="카카오로그인" />
        </button>
      </div>
    </Col>
  );
};

export default LoginForm;
