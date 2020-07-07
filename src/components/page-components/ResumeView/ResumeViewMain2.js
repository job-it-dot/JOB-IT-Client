import React, { Component } from 'react';
import classes from './ResumeViewMain.module.less';
import { Button, Row, Col, Descriptions } from 'antd';

class ResumeViewMain2 extends Component {
  render() {
    return (
      <>
        <Row>
          <Col span={24} style={{ marginTop: 40 }}>
            <div>
              <h2 className={classes.title}>이력서 ㅣ 제작용 이력서</h2>
            </div>
            <div>
              <Descriptions title="인적사항" bordered>
                <Descriptions.Item label="이름">장홍범</Descriptions.Item>
                <Descriptions.Item label="성별">남자</Descriptions.Item>
                <Descriptions.Item label="나이">30세</Descriptions.Item>
                <Descriptions.Item label="주소" span={3}>
                  경기도 성남시 서현로 ...
                </Descriptions.Item>

                <Descriptions.Item label="학교명">코스타 대학교</Descriptions.Item>
                <Descriptions.Item label="전공명">코스타학과</Descriptions.Item>
                <Descriptions.Item label="최종학력">대졸</Descriptions.Item>
                <Descriptions.Item label="휴대폰번호">010-1234-1234</Descriptions.Item>
                <Descriptions.Item label="이메일">kostaTest@naver.com</Descriptions.Item>
              </Descriptions>
            </div>
            <div style={{ marginTop: 30 }}>
              <Descriptions title="경력사항" bordered>
                <Descriptions.Item label="회사명">해당없음</Descriptions.Item>
              </Descriptions>
            </div>
            <div style={{ marginTop: 30 }}>
              <Descriptions title="자격증" bordered>
                <Descriptions.Item label="자격증명">정보처리기사</Descriptions.Item>
                <Descriptions.Item label="취득년월">2002.05.05</Descriptions.Item>
                <Descriptions.Item label="자격증명">컴퓨터활용능력1급</Descriptions.Item>
                <Descriptions.Item label="취득년월">2002.06.06</Descriptions.Item>
                <Descriptions.Item label="자격증명">자동차면허증</Descriptions.Item>
                <Descriptions.Item label="취득년월">2002.07.07</Descriptions.Item>
              </Descriptions>
            </div>
            <div style={{ marginTop: 30 }}>
              <Descriptions title="어학능력" bordered>
                <Descriptions.Item label="언어명">영어</Descriptions.Item>
                <Descriptions.Item label="수준">비즈니스영어</Descriptions.Item>
              </Descriptions>
            </div>
            <div style={{ marginTop: 30 }}>
              <Descriptions title="포트폴리오" bordered>
                <Descriptions.Item label="링크">
                  <a href="https://github.com/Sword-Is-Cat">https://github.com/Sword-Is-Cat</a>
                </Descriptions.Item>
              </Descriptions>
            </div>
            <div style={{ marginTop: 30 }}>
              <Descriptions title="자기소개서" bordered>
                <Descriptions.Item>
                  <h2>테스트제목</h2>
                  <span>테스트 내용 ~!@# ~!@# ~!@#</span>
                  <p></p>
                  <h2>테스트제목2</h2>
                  <span>테스트 내용 **^^ **^^ **^^</span>
                </Descriptions.Item>
              </Descriptions>
            </div>
          </Col>
          <Col span={24} style={{ marginTop: 50 }}>
            <div className={classes.buttonBorder}>
              <Button type="primary" style={{ width: 200, height: 50 }}>
                수정하기
              </Button>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default ResumeViewMain2;
