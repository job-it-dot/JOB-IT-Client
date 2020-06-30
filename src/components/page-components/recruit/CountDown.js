import React from 'react';
import moment from 'moment';
import './CountDown.css';
import { Col, Row } from 'antd';
import classes from './RecruitDetail.module.less';

export default class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;
    if (!seconds) {
      return null;
    }

    return (
      <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ marginTop: 5, marginBottom: 15 }}>
          <Col span={12}>
            <div>
              <div className="countdown-wrapper">
                {days && (
                  <div className="countdown-item">
                    {days}
                    <span>days</span>
                  </div>
                )}
                {hours && (
                  <div className="countdown-item">
                    {hours}
                    <span>hours</span>
                  </div>
                )}
                {minutes && (
                  <div className="countdown-item">
                    {minutes}
                    <span>minutes</span>
                  </div>
                )}
                {seconds && (
                  <div className="countdown-item">
                    {seconds}
                    <span>seconds</span>
                  </div>
                )}
              </div>
              <div>
                <span style={{ fontSize: 16, marginLeft: 5 }}>시작일ㅣ</span>{' '}
                <span style={{ fontWeight: 'bold', marginRight: 30, fontSize: 16 }}>2020.06.29(월)</span>
                <span style={{ fontSize: 16, marginLeft: 5 }}>마감일ㅣ </span>{' '}
                <span style={{ fontWeight: 'bold', fontSize: 16 }}>2020.09.27(일)</span>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <p>
              <span className={classes.recruit_name}>지원양식ㅣ</span>{' '}
              <span className={classes.recruit_subtitle} style={{ color: 'blue' }}>
                JOB-IT 이력서 양식
              </span>
            </p>
            <p>
              <span className={classes.recruit_name}>모집분야ㅣ</span>{' '}
              <span className={classes.recruit_subtitle}>FrontEnd 및 BackEnd 개발자</span>
            </p>
            <p>
              <span className={classes.recruit_name}>모집인원ㅣ</span>{' '}
              <span className={classes.recruit_subtitle}>oo명</span>
            </p>
          </Col>
        </Row>
      </>
    );
  }
}
