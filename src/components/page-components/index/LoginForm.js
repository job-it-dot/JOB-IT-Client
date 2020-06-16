import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, CloseOutlined } from '@ant-design/icons';
import classes from './LoginForm.module.less';
import Logo from '../../common-components/layout/Logo/Logo';
import kakaologin from '../../../assets/kakaologin.png';


const LoginForm = () => {
  const onFinish = values => {      
    console.log('Received values of form: ', values);
  };

  const kakaologinbtn = () => {
    console.log('카카오로그인');
  }

  return (
    <>
    <div className={classes.box}>
      <div className={classes.Logo}>
        <Logo/>
        <CloseOutlined style={{float:"right" , marginTop:0 , fontSize:24}}/>
      </div>
      <div>
        <h1 className={classes.title}>
          친구에게 딱 맞는
        <br/>
          회사를 추천해 주세요!
        </h1>
        <h2 className={classes.subtitle}>
          JOB-IT는 친구에게 좋은 회사를 추천하고,
          <br/>
          채용 성공시 보상 받을 수 있는 서비스 입니다.
        </h2>
      </div>
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>자동 로그인</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="a">
            비밀번호 찾기
            </a>
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
            로그인
            </Button>
            &nbsp;&nbsp;회원이 아니신가요? <a href="b">회원가입</a>
        </Form.Item>
        </Form>
        <hr/>
        <div>
          <h2 style={{textAlign:"center" , fontSize:17}}>소셜로그인</h2>
        </div>
        <div>
        <button onClick={kakaologinbtn} className={classes.kakaobutton}><img src={kakaologin} height={50} alt="카카오로그인"/></button>
        </div>
    </div>   
    </>
  );
};

export default LoginForm;