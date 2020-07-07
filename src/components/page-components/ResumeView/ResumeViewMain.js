import React, { Component } from 'react';
import classes from './ResumeViewMain.module.less';
import { Button, Row, Col, Descriptions } from 'antd';

class ResumeViewMain extends Component {
  render() {
    return (
      <>
        <Row>
          <Col span={24} style={{ marginTop: 40 }}>
            <div>
              <h2 className={classes.title}>이력서 ㅣ 1번 이력서</h2>
            </div>
            <div>
              <Descriptions title="인적사항" bordered>
                <Descriptions.Item label="이름">김경화</Descriptions.Item>
                <Descriptions.Item label="성별">여자</Descriptions.Item>
                <Descriptions.Item label="나이">20세</Descriptions.Item>
                <Descriptions.Item label="주소" span={3}>
                  경기도 성남시 판교동 ....
                </Descriptions.Item>

                <Descriptions.Item label="학교명">코스타 대학교</Descriptions.Item>
                <Descriptions.Item label="전공명">코스타학과</Descriptions.Item>
                <Descriptions.Item label="최종학력">대졸</Descriptions.Item>
                <Descriptions.Item label="휴대폰번호">010-1234-1234</Descriptions.Item>
                <Descriptions.Item label="이메일">kosta@naver.com</Descriptions.Item>
              </Descriptions>
            </div>
            <div style={{ marginTop: 30 }}>
              <Descriptions title="경력사항" bordered>
                <Descriptions.Item label="회사명">(주)코스타</Descriptions.Item>
                <Descriptions.Item label="직위">부장</Descriptions.Item>
                <Descriptions.Item label="재직기간">3년</Descriptions.Item>
                <Descriptions.Item label="재직여부">퇴직</Descriptions.Item>
                <Descriptions.Item label="담당업무" span={3}>
                  SpringBoot , FrontEnd React, TypeScript
                </Descriptions.Item>
                <Descriptions.Item label="상세기술">상세기술....</Descriptions.Item>
              </Descriptions>
            </div>
            <div style={{ marginTop: 30 }}>
              <Descriptions title="자격증" bordered>
                <Descriptions.Item label="자격증명">정보처리기사</Descriptions.Item>
                <Descriptions.Item label="취득년월">2002.05.05</Descriptions.Item>
              </Descriptions>
            </div>
            <div style={{ marginTop: 30 }}>
              <Descriptions title="어학능력" bordered>
                <Descriptions.Item label="언어명">영어</Descriptions.Item>
                <Descriptions.Item label="수준">매우유창함</Descriptions.Item>
              </Descriptions>
            </div>
            <div style={{ marginTop: 30 }}>
              <Descriptions title="포트폴리오" bordered>
                <Descriptions.Item label="링크">
                  <a href="https://github.com/KyunghwaKim">https://github.com/KyunghwaKim</a>
                </Descriptions.Item>
              </Descriptions>
            </div>
            <div style={{ marginTop: 30 }}>
              <Descriptions title="자기소개서" bordered>
                <Descriptions.Item>
                  <h2>성장과정</h2>
                  <span>
                    어릴적 어쩌구 저쩌구.... 어릴적 어쩌구 저쩌구.... 어릴적 어쩌구 저쩌구....
                    <br /> 어릴적 어쩌구 저쩌구.... 어릴적 어쩌구 저쩌구.... 어릴적 어쩌구 저쩌구....
                  </span>
                  <p></p>
                  <h2>성격의 장단점</h2>
                  <span>
                    성격이 이러쿵 저러쿵.... 성격이 이러쿵 저러쿵.... 성격이 이러쿵 저러쿵.... 성격이 이러쿵 저러쿵....
                    <br />
                    성격이 이러쿵 저러쿵.... 성격이 이러쿵 저러쿵....
                  </span>
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

export default ResumeViewMain;
