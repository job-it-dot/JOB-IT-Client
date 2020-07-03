import React, { Component } from 'react';
import { Form, Input, Button, Col } from 'antd';
import classes from './MyPage.module.less';

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

  renderFeedbackMessage() {
    const { confirmPassword } = this.state;

    if (confirmPassword) {
      if (!this.doesPasswordMatch()) {
        return <div className={classes.passwordFalse}>패스워드가 일치하지 않습니다!</div>;
      }
    }
  }

  findPassWord = () => {
    console.log('비밀번호찾기');
  };

  render() {
    return (
      <>
        <Col span={22} style={{ marginLeft: 100, marginTop: 80, height: 800 }}>
          <span style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 180, color: 'black' }}>비밀번호 변경</span>

          <div className={classes.subjectTopStyle}>
            <strong style={{ marginLeft: 58, color: 'skyblue' }}>
              비밀번호는 주기적(최소 6개월)으로 변경해 주시기 바랍니다.
            </strong>
          </div>

          <div className={classes.form_box}>
            <h3 className={classes.form_text}>비밀번호 변경</h3>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item rules={[{ required: true, message: '현재 비밀번호를 입력해주세요.' }]}>
                현재 비밀번호{' '}
                <Input type="password" placeholder="현재 비밀번호를 입력해주세요." style={{ width: 460 }} />
              </Form.Item>

              <Form.Item rules={[{ required: true, message: '새로운 비밀번호를 입력해주세요' }]}>
                새로운 비밀번호{' '}
                <Input
                  type="password"
                  placeholder="새로운 비밀번호를 입력해주세요."
                  style={{ width: 460 }}
                  id="passwordInput"
                  onChange={(e) => this.handleOnPasswordInput(e.target.value)}
                />
              </Form.Item>

              <Form.Item rules={[{ required: true, message: '새로운 비밀번호 확인을 위해 입력해주세요' }]}>
                새로운 비밀번호 확인
                <Input
                  type="password"
                  placeholder="새로운 비밀번호 확인을 위해 입력해주세요."
                  style={{ width: 460 }}
                  id="confirmPasswordInput"
                  onChange={(e) => this.handleOnConfirmPasswordInput(e.target.value)}
                />
                {this.renderFeedbackMessage()}
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" className={classes.buttonstyle}>
                  비밀번호 변경
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </>
    );
  }
}

export default MypageContent;
