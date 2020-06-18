import React, { Component } from 'react';
import Logo from '../../common-components/layout/Logo/Logo';
import classes from './CorpRegForm.module.less';
import { CheckOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class CorpSignUp extends Component {
  render() {
    return (
      <>
        <div className={classes.header}>
          <div className={classes.logo}>
            <Logo />
            <ul className={classes.ul}>
              <li className={classes.person}>
                <Link to="/signup" className={classes.person_link}>
                  개인회원
                </Link>
              </li>
              <li className={classes.corp}>
                <Link to="/corpSignUp" className={classes.corp_link}>
                  기업회원
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <form>
          <div className={classes.center}>
            <div style={{ marginBottom: 10 }}>
              <span style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 25 }}>
                회원가입하고 다양한 혜택을 누리세요!
                <span style={{ fontSize: 13, float: 'right', marginTop: 10 }}>
                  <strong>*</strong>
                  필수 입력 정보입니다
                </span>
              </span>
            </div>
            <div>
              <div>
                <input
                  type="text"
                  id="M_Name"
                  name="M_Name"
                  maxLength="12"
                  placeholder="＊이름(실명)"
                  className={classes.inputName}
                ></input>
                <div>
                  <p></p>
                </div>
              </div>
              <div>
                <input
                  type="email"
                  id="M_Name"
                  name="M_Name"
                  placeholder="＊ 이메일"
                  className={classes.inputName}
                ></input>
                <div>
                  <p></p>
                </div>
              </div>
              <div>
                <input
                  type="password"
                  id="M_Name"
                  name="M_Name"
                  placeholder="＊ 비밀번호"
                  className={classes.inputName}
                ></input>
                <div>
                  <p></p>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  id="M_Name"
                  name="M_Name"
                  placeholder="＊ 휴대폰번호"
                  className={classes.inputName}
                ></input>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.button_div}>
            <button className={classes.reg_button}>
              <span className={classes.reg_span}>
                <CheckOutlined style={{ color: 'white' }} />
                &nbsp;가입하기
              </span>
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default CorpSignUp;
