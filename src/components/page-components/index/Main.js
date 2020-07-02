import React, { Component } from 'react';
import classes from './Main.module.less';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import './Main.css';
import logo from './logo.png';

class Main extends Component {
  render() {
    return (
      <>
        <Row>
          <Col span={12}>
            <div className={classes.firstBackground}>
              <b className={classes.bStyle}>요즘 이직, 잡잇</b>
              <p style={{ fontSize: 20 }}>나에게 딱 맞는 회사, 잡잇에서 찾아보세요!</p>
              <Button className="btn" type="primary" shape="round" size={'large'}>
                지금 시작하기
              </Button>
            </div>
          </Col>
          <Col span={12}>
            <img width="464px" height="500px" alt="mainImg" src={logo}></img>
          </Col>
        </Row>
        <Row>
          <div className={classes.secondBackground}>
            <table width="97%">
              <tr>
                <td align="center">
                  <div className={classes.smallDiv}>
                    <br></br>
                    <br></br>
                    <b style={{ fontSize: 35 }}>매치업</b>
                    <br></br>
                    <br></br>
                    프로필 등록 한번으로 인사담당자에게<br></br>
                    직접 면접 제안을 받으세요.<br></br>
                    <br></br>더 알아보기
                  </div>
                </td>
                <td align="center">
                  <div className={classes.smallDiv}>
                    <br></br>
                    <br></br>
                    <b style={{ fontSize: 35 }}>맞춤 검색</b>
                    <br></br>
                    <br></br>
                    '재택근무', '반려동물'<br></br>내 취향에 맞는 회사를 찾아보세요.
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </Row>
        <Row>
          <div className={classes.thirdBackground}>
            <b className={classes.bStyle}>나에게 딱 맞는 회사 찾기</b>
            <p style={{ fontSize: 20 }}>회원가입 후, 지금 가장 인기있는 채용 소식을 팔로우 해보세요.</p>
            <br></br>
            <br></br>
            <table>
              <tr>
                <td width="300">
                  <img
                    width="150"
                    alt="example"
                    src="https://static.wanted.co.kr/images/home/logos/logo_naver.png"
                  ></img>
                </td>
                <td width="300">
                  <img
                    width="150"
                    alt="example"
                    src="https://static.wanted.co.kr/images/home/logos/logo_toss.png"
                  ></img>
                </td>
                <td width="300">
                  <img
                    width="150"
                    alt="example"
                    src="https://static.wanted.co.kr/images/home/logos/logo_kakao.png"
                  ></img>
                </td>
                <td width="300">
                  <img
                    width="150"
                    alt="example"
                    src="https://static.wanted.co.kr/images/home/logos/logo_coupang.png"
                  ></img>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    width="150"
                    alt="example"
                    src="https://static.wanted.co.kr/images/home/logos/logo_airbnb.png"
                  ></img>
                </td>
                <td>
                  <img
                    width="150"
                    alt="example"
                    src="https://static.wanted.co.kr/images/home/logos/logo_wooahan.png"
                  ></img>
                </td>
                <td>
                  <img width="150" alt="example" src="https://static.wanted.co.kr/images/home/logos/logo_skt.png"></img>
                </td>
                <td>
                  <img
                    width="150"
                    alt="example"
                    src="https://static.wanted.co.kr/images/home/logos/logo_facebook.png"
                  ></img>
                </td>
              </tr>
            </table>
            <br></br>
            <br></br>
            <br></br>
            <Button className="btn" type="primary" shape="round" size={'large'}>
              지금 시작하기
            </Button>
          </div>
        </Row>
      </>
    );
  }
}

export default Main;
