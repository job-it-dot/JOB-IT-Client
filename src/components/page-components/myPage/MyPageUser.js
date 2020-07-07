import React, { Component } from 'react';
import { Col, Descriptions } from 'antd';
import css from './MyPage.module.less';

class MyPageUser extends Component {
  render() {
    return (
      <>
        <Col span={22} style={{ marginLeft: 20, marginTop: 80, height: 800 }}>
          <h3>회원정보</h3>
          <Descriptions bordered>
            <Descriptions.Item label="이름" span={3}>
              정준영
            </Descriptions.Item>
            <Descriptions.Item label="이메일" span={3}>
              wnsdud@naver.com
            </Descriptions.Item>
            <Descriptions.Item label="전화번호" span={3}>
              010-8544-6458
            </Descriptions.Item>

            <Descriptions.Item label="생년월일" span={3} className={css.font}>
              1997년12월27일
            </Descriptions.Item>
            <Descriptions.Item label="나이" span={2}>
              24
            </Descriptions.Item>
            <Descriptions.Item label="성별" span={3}>
              남성
            </Descriptions.Item>
            <Descriptions.Item label="우편번호/도로명주소" span={3}>
              16582 경기 수원시 권선구 권광로 55권선자이 이편한세상
            </Descriptions.Item>
            <Descriptions.Item label="상세주소" span={3}>
              519동 207호
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </>
    );
  }
}

export default MyPageUser;
