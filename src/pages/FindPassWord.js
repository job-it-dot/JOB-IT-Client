import React, { Component } from 'react';
import FindPassWordForm from '../components/page-components/login/FindPassWordForm';
import FindPassWordFormCompany from '../components/page-components/login/FindPassWordFromCompany';
import { Row, Col } from 'antd';
import classes from '../components/page-components/login/FindPassWordForm.module.less';

class FindPassWord extends Component {
  render() {
    return (
      <Row className={classes.form_class}>
        <Col span={12}>
          <FindPassWordForm />
        </Col>
        <Col span={12}>
          <FindPassWordFormCompany />
        </Col>
      </Row>
    );
  }
}

export default FindPassWord;
