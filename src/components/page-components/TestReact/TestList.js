import React, { Component } from 'react';
import 'antd/dist/antd.css';
import List from './List';
import AnnouncementList from './AnnouncementList';
import { Row, Col } from 'antd';
import Up from './Up';
import classes from './TestList.module.less';
import SearchsButton from './SearchsButton';
import './index.css';
import JiyeoSearchs from './Searchs';

class TestList extends Component {
  state = {
    gg: [],
  };

  handleInput = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    if (!this.state.gg === value) {
      console.log('123');
    } else {
      console.log('54454');
    }
    this.setState({ gg: this.state.gg.concat(value) });
    console.log(this.state.gg);
  };

  render() {
    return (
      <>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <div className={classes.Testss}>
              <AnnouncementList />
            </div>
          </Col>
        </Row>

        <div style={{ marginLeft: 10, width: 641 }}>
          <h3>상세검색</h3>
          <JiyeoSearchs value={this.state.gg} kkk={this.handleInput} />
        </div>

        <div className={classes.resultSet}>
          <SearchsButton value={this.state.gg} />
        </div>

        <div className={classes.test1}>
          <List />
        </div>

        <div>
          <Up />
        </div>
      </>
    );
  }
}

export default TestList;
