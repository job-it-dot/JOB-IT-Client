import React, { Component } from 'react';
import classes from './ResumeViewMain.module.less';
import { Button, Row, Col } from 'antd';

class ResumeViewMain extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <br></br>
          <div>
            <h1>인적사항</h1>
            <hr></hr>
            <tabel>
              <tr>
                <td>
                  <h3>김경화</h3>
                </td>
                <td colSpan="3">여 1994년, 27세</td>
              </tr>
              <tr>
                <td width="100px">휴대폰 |</td>
                <td width="200px">010-1234-5678</td>
                <td width="100px">Email |</td>
                <td width="200px">khkim@kosta.com</td>
              </tr>
            </tabel>
          </div>

          <br></br>
          <br></br>

          <div>
            <h1>학력</h1>
            <hr></hr>
            <tabel>
              <tr>
                <td>2020.02 ~ 2020.07</td>
                <td>
                  <h3>코스타대학</h3>
                </td>
                <td>back-end 전공</td>
              </tr>
              <tr>
                <td width="200px">졸업</td>
                <td width="100px">학점 |</td>
                <td width="200px">4.5 / 4.5</td>
              </tr>
            </tabel>
          </div>

          <br></br>
          <br></br>

          <div>
            <h1>경력</h1>
            <hr></hr>
            <tabel>
              <tr>
                <td>2020.02 ~</td>
                <td>
                  <h3>(주)코스타</h3>
                </td>
                <td>서버 부서 선임개발자</td>
              </tr>
              <tr>
                <td width="200px">재직중</td>
                <td width="200px">back-end 개발</td>
                <td width="600px">
                  여기는 경력 상세기술칸입니다.<br></br>
                  이것<br></br>
                  저것<br></br>
                  내가 다 개발함 ㅅㄱ
                </td>
              </tr>
            </tabel>
          </div>

          <br></br>
          <br></br>

          <div>
            <h1>자격증</h1>
            <hr></hr>
            <tabel>
              <tr>
                <td width="100px">2018.08</td>
                <td width="100px">
                  <h3>정보처리기사</h3>
                </td>
                <td>한국산업인력공단</td>
              </tr>
            </tabel>
          </div>

          <br></br>
          <br></br>

          <div>
            <h1>어학능력</h1>
            <hr></hr>
            <tabel>
              <tr>
                <td width="100px">
                  <h3>영어</h3>
                </td>
                <td>상</td>
              </tr>
            </tabel>
          </div>

          <br></br>
          <br></br>

          <div>
            <h1>포트폴리오</h1>
            <hr></hr>
            <tabel>
              <tr>
                <td width="300px">https://github.com/KyunghwaKim</td>
                <td>포폴올린거 다운</td>
              </tr>
            </tabel>
          </div>

          <br></br>
          <br></br>

          <div>
            <h1>자기소개서</h1>
            <hr></hr>
            <tabel>
              <tr>
                <td>
                  <b>[백엔드의 밝은 미래 김경화]</b>
                </td>
              </tr>
              <tr>
                <td>
                  제가 미래입니다.<br></br>
                  저를 뽑으세요.
                </td>
              </tr>
            </tabel>
          </div>
        </Col>

        <br></br>

        <Col span={24}>
          <div className={classes.buttonBorder}>
            <br></br>
            <Button type="primary">채용</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="primary">탈락</Button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ResumeViewMain;
