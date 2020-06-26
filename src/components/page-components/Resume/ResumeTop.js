import React, { Component } from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

class ResumeTop extends Component {
  render() {
    return (
      <div>
        <Steps
          type="navigation"
          current={this.props.current}
          onChange={this.props.setCurrent}
          className="site-navigation-steps"
          style={{ marginTop: 30, marginBottom: 40 }}
        >
          <Step status="process" title="개인정보/학력" />
          <Step status="finish" title="경력" />
          <Step status="wait" title="자격증" />
          <Step status="wait" title="어학능력" />
          <Step status="wait" title="포트폴리오" />
          <Step status="wait" title="자기소개서" />
        </Steps>
      </div>
    );
  }
}

export default ResumeTop;
