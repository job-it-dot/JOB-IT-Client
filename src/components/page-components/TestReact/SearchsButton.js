import React, { Component } from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import classes from './TestList.module.less';
import Form from 'antd/lib/form/Form';

class But extends Component {
  check = () => {
    console.log(this.props.value);
  };

  state = {
    gg: [],
  };

  render() {
    const array = this.props.value;
    const list = array.map((index) => (
      <span key={index} style={{ marginRight: 30 }}>
        {index}
      </span>
    ));
    return (
      <>
        <Form action="">
          <div className={classes.listWrapClear}>
            <div className={classes.resultList}>
              <div>
                {/* {array} */}
                {list}
              </div>
              <Button className={classes.reset} style={{ left: 500, border: 0 }} onClick={this.props.onDelete}>
                초기화
              </Button>

              <Button
                className={classes.butbut}
                type="primary"
                shape="circle"
                icon={<SearchOutlined />}
                style={{ left: 505 }}
              />
            </div>
          </div>
        </Form>
      </>
    );
  }
}
export default But;
