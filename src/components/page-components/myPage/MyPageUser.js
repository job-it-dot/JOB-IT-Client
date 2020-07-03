import React, { Component } from 'react';
import { Col, Descriptions, Button } from 'antd';
import { Link } from 'react-router-dom';
import css from './MyPage.module.less';

class MyPageUser extends Component {
  render() {
    return (
      <>
        <Col span={22} style={{ marginLeft: 20, marginTop: 80, height: 800 }}>
          <Descriptions bordered>
            <Descriptions.Item label="이름" span={3}>
              이름
            </Descriptions.Item>
            <Descriptions.Item label="아이디" span={3}>
              아이디
            </Descriptions.Item>
            <Descriptions.Item label="이메일" span={3}>
              이메일
            </Descriptions.Item>
            <Descriptions.Item label="전화번호" span={3}>
              전화번호
            </Descriptions.Item>

            <Descriptions.Item label="전화번호" span={3}>
              000-0000-0000
            </Descriptions.Item>

            <Descriptions.Item label="생년월일" span={3} className={css.font}>
              1999년12월22일
            </Descriptions.Item>
            <Descriptions.Item label="나이" span={2}>
              나이
            </Descriptions.Item>
            <Descriptions.Item label="성별" span={3}>
              남성
            </Descriptions.Item>
            <Descriptions.Item label="우편번호" span={3}>
              경기도 권선구 권선로 165
            </Descriptions.Item>
            <Descriptions.Item label="주소" span={3}>
              자이e편한세상 111동 111호
            </Descriptions.Item>
          </Descriptions>

          <Link to="/MyPageUerUpdate">
            <Button className={css.test} type="primary" htmlType="submit">
              수정하기
            </Button>
          </Link>
        </Col>
      </>
    );
  }
}

export default MyPageUser;
