import React, { Component } from 'react';
import classes from './ApplyMain.module.less';
import { Row, Col, Select, Button, Modal, Radio, Input, Descriptions } from 'antd';
import { RetweetOutlined } from '@ant-design/icons';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const { Option } = Select;

class ApplyMain extends Component {
  state = {
    value: 1,
    resumeValue: '이력서1', //db에 있는 대표이력서 넣어주기
    emailValue: '', //db에 있는 회원 이메일 넣어주기
    phoneValue: '', //db에 있는 회원 전화번호 010
    phoneValue2: '', //db에 있는 회원 전화번호 중간 4자리 1234
    phoneValue3: '', //db에 있는 회원 전화번호 마지막 4자리 5678
    realemailValue: '',
    realphoneValue: '',
    visible: false,
    visible2: false,
    applyField: '',
  };

  어떤함수 = () => {
    this.props.history.push('/apply');
  };

  onChangeField = (value) => {
    this.setState({
      applyField: value,
    });
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
      resumeValue: '이력서' + this.state.value,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  showModalTwo = () => {
    this.setState({
      visible2: true,
    });
  };

  handleOkTwo = (e) => {
    this.setState({
      visible2: false,
      realemailValue: this.state.emailValue,
      realphoneValue: this.state.phoneValue + '-' + this.state.phoneValue2 + '-' + this.state.phoneValue3,
    });
  };

  handleCancelTwo = (e) => {
    this.setState({
      visible2: false,
    });
  };

  onChange2 = (e) => {
    this.setState({
      emailValue: e.target.value,
    });
  };

  onChange3 = (value) => {
    this.setState({
      phoneValue: value,
    });
  };

  onChange4 = (e) => {
    this.setState({
      phoneValue2: e.target.value,
    });
  };

  onChange5 = (e) => {
    this.setState({
      phoneValue3: e.target.value,
    });
  };

  apply = (e) => {
    console.log(this.state.applyField);
    console.log(this.state.resumeValue);
    console.log(this.state.realemailValue);
    console.log(this.state.realphoneValue);

    axios({
      method: 'post',
      url: 'http://api.jobit.co.kr:9595/user/apply/company',
      data: JSON.stringify({
        recruitId: this.state.resumeValue,
        resumeId: this.state.resumeValue,
        memberEmail: this.state.realemailValue,
        userPhone: this.state.realphoneValue,
      }),
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log('성공' + res))
      .catch((res) => console.log('실패' + res));
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    const { value } = this.state;

    return (
      <>
        <Row>
          <b style={{ color: 'skyblue', marginTop: 70 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;코스타</b>
        </Row>
        <Row>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;코스타 직원 채용(신입/경력 모집)</h3>
        </Row>
        <Row>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Select
            showSearch
            style={{ width: 500 }}
            placeholder="지원분야를 선택해주세요."
            optionFilterProp="children"
            onChange={this.onChangeField}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="mobile">FronEnd(경력)</Option>
            <Option value="unity">BackEnd(신입)</Option>
            <Option value="linux">FronEnd(신입)</Option>
          </Select>
        </Row>
        <Row>
          <div className={classes.background}>
            <div className={classes.divStyle}>
              <table>
                <tbody>
                  <tr>
                    <td width={'250px'}>
                      <b className={classes.bStyle}>지원이력서</b>
                    </td>
                    <td className={classes.tdStyle} width={'250px'}>
                      <Button className={classes.buttonStyle} type="primary" onClick={this.showModal}>
                        <h5>
                          <RetweetOutlined /> 이력서 변경
                        </h5>
                      </Button>

                      <Modal
                        title="이력서 선택"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                      >
                        <Radio.Group onChange={this.onChange} value={value}>
                          <Radio style={radioStyle} value={1}>
                            이력서1
                          </Radio>
                          <Radio style={radioStyle} value={2}>
                            이력서2
                          </Radio>
                          <Radio style={radioStyle} value={3}>
                            이력서3
                          </Radio>
                        </Radio.Group>
                      </Modal>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr></hr>
              <div className={classes.inDivStyle}>
                <Input type="text" value={this.state.resumeValue} readOnly/>
              </div>

              <div className={classes.inDivStyle}>
                <hr></hr>
                <h5>
                  <table>
                    <tbody>
                      <tr>
                        <td width={'450px'}>
                          이메일
                          <Input
                            type="text"
                            className={classes.inputStyle}
                            placeholder="khkim@kosta.com"
                            value={this.state.realemailValue}
                          />
                         &nbsp; |&nbsp; 휴대폰
                          <Input
                            type="text"
                            placeholder="010-1234-5678"
                            className={classes.inputStyle}
                            value={this.state.realphoneValue}
                          />
                          <br/>
                          <br/>
                        </td>
                        <td style={{ textAlign: 'right' }} width={'100px'}>
                          <Button className={classes.buttonStyle} type="primary" onClick={this.showModalTwo}>
                            <h5>수정</h5>
                          </Button>

                      
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </h5>
              </div>
            </div>

            <div className={classes.divButton}>
              <Button style={{ width: '200px' }} type="primary" onClick={this.apply}>
                지원하기
              </Button>
            </div>
          </div>
        </Row>
      </>
    );
  }
}

export default withRouter(ApplyMain);
