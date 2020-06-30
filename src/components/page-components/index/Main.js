import React, { Component } from 'react';
import classes from './Main.module.less';

class Main extends Component {
  render() {
    return (
      <>
        <div className={classes.background}>
          <p>요즘 이직, JOB-IT</p>
          <p>나에게 딱 맞는 회사, JOB-IT에서 찾아보세요</p>
          <button>시작하기</button>
        </div>
      </>
    );
  }
}

export default Main;
