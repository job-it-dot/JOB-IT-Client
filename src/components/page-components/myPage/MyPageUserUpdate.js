import React, { Component } from 'react';
import { Col, Descriptions, Button, Input, Form, InputNumber, Radio } from 'antd';
import { Link } from 'react-router-dom';
import css from './MyPage.module.less';

class MyPageUserUpdate extends Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const validateMessages = {
      required: '이름은 필수입니다.',
      types: {
        email: '이메일 형식으로 입력해주세요',
        number: '{label} is not a validate number!',
      },
      number: {
        range: '1~120만 가능합니다',
      },
    };

    return (
      <Col span={22} style={{ marginLeft: 20, marginTop: 80, height: 800 }}>
        <Form name="nest-messages" validateMessages={validateMessages}>
          <Descriptions bordered>
            <Descriptions.Item label="이름" span={3}>
              <Form.Item
                className={css.test}
                name={['user', 'name']}
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="이메일" span={3}>
              <Form.Item
                name={['user', 'email']}
                rules={[
                  {
                    type: 'email',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="전화번호" span={3}>
              전화번호
            </Descriptions.Item>

            <Descriptions.Item label="이메일" span={3}>
              wnsduddududud@naver.com
            </Descriptions.Item>

            <Descriptions.Item label="전화번호" span={3}>
              000-0000-0000
            </Descriptions.Item>

            <Descriptions.Item label="생년월일" span={4} className={css.font}>
              1999년12월22일
            </Descriptions.Item>
            <Descriptions.Item label="나이" span={2}>
              <Form.Item
                name={['user', 'age']}
                rules={[
                  {
                    type: 'number',
                    min: 0,
                    max: 150,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="성별" span={4}>
              <Radio.Group onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>남성</Radio>
                <Radio value={2}>여성</Radio>
              </Radio.Group>
            </Descriptions.Item>
            <Descriptions.Item label="우편번호" span={3}>
              경기도 수원시 권선구 권선로 165
            </Descriptions.Item>
            <Descriptions.Item label="주소" span={3}>
              자이e편한세상 111동 111호
            </Descriptions.Item>
          </Descriptions>
        </Form>
        <Link to="/userUpdate">
          <Button style={{ marginTop: 30, marginLeft: 280 }} type="primary" htmlType="submit">
            수정하기
          </Button>
        </Link>
      </Col>
    );
  }
}

export default MyPageUserUpdate;
