import React, { Component } from 'react';
import { Form, Input, Button, Col } from 'antd';
import classes from './MyPage.module.less';
import { withRouter } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const onFinish = (values) => {
  console.log('Success:', values);
  this.props.history.push('/');
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

class MypageContent extends Component {
  state = {
    password: '',
    confirmPassword: '',
  };

  handleOnPasswordInput(passwordInput) {
    this.setState({ password: passwordInput });
  }

  handleOnConfirmPasswordInput(confirmPasswordInput) {
    this.setState({ confirmPassword: confirmPasswordInput });
  }

  doesPasswordMatch() {
    const { password, confirmPassword } = this.state;
    return password === confirmPassword;
  }

  confirmPasswordClassName() {
    const { confirmPassword } = this.state;

    if (confirmPassword) {
      return this.doesPasswordMatch() ? 'is-valid' : 'is-invalid';
    }
  }

  findPassWord = () => {
    console.log('비밀번호찾기');
  };

  render() {
    return (
      <>
        <Col span={22} style={{ marginLeft: 100, marginTop: 80, height: 800 }}>
          <span style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 180, color: 'black' }}>비밀번호 확인</span>

          <div className={classes.subjectTopStyle}>
            <strong style={{ marginLeft: 13, color: 'skyblue' }}>
              회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 입력해주세요.
            </strong>
          </div>

          <div className={classes.form_box} style={{ height: 300 }}>
            <h3 className={classes.form_text}>비밀번호 확인</h3>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item rules={[{ required: true, message: '현재 비밀번호를 입력해주세요.' }]}>
                아이디 <Input type="text" defaultValue="wnsduddlcjd" disabled style={{ width: 460 }} />
              </Form.Item>

              <Form.Item
                rules={[{ required: true, message: '새로운 비밀번호 확인을 위해 입력해주세요.' }]}
                name="password"
              >
                비밀번호
                <Input
                  type="password"
                  placeholder="비밀번호"
                  style={{ width: 460 }}
                  id="confirmPasswordInput"
                  onChange={(e) => this.handleOnConfirmPasswordInput(e.target.value)}
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                style={{ left: 140, top: 0, right: 20 }}
                className={classes.buttonstyle}
              >
                확인
              </Button>
              <Button style={{ left: 150, top: 0 }} className={classes.buttonstyle}>
                취소
              </Button>
            </Form>
          </div>
        </Col>
      </>
    );
  }
}

export default withRouter(MypageContent);
