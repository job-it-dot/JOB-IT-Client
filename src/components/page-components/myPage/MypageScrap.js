import React, { Component } from 'react';
import { Col, List, message, Spin, Button } from 'antd';
import { Checkbox, Form } from 'semantic-ui-react';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';
import 'antd/dist/antd.css';
import css from './MyPage.module.less';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class MypageScrap extends Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    this.fetchData((res) => {
      this.setState({
        data: res.results,
      });
    });
  }

  fetchData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  };

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.fetchData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  render() {
    return (
      <Col span={22} style={{ marginLeft: 20, marginTop: 80, height: 800 }}>
        <h2>스크랩공고</h2>
        <Form>
          <div className={css.divbox}>
            <Form.Field control={Checkbox} style={{ marginLeft: 25, marginTop: 5 }} />
            <Form.Field>
              <Button style={{ left: 50, top: 0, padding: 0 }} className={css.buttonstyle}>
                삭제
              </Button>
            </Form.Field>
          </div>
          <div className={css.demoInfiniteContainer}>
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={this.handleInfiniteOnLoad}
              hasMore={!this.state.loading && this.state.hasMore}
              useWindow={false}
              style={{ height: 600 }}
            >
              <List
                dataSource={this.state.data}
                renderItem={(item) => (
                  <List.Item key={item.id}>
                    <Form.Field control={Checkbox} />
                    {/* <input type="checkbox" className={css.checksEtrans}/> */}

                    <List.Item.Meta
                      title={<h3>Jobit(주)</h3>}
                      description={<h5>2020년 kosta web과정 인재 모집</h5>}
                      style={{ marginLeft: 30 }}
                    />
                    <div>
                      {' '}
                      <Button className={css.buttonstyle}>즉시지원</Button>
                      <h6 style={{ marginLeft: 45, marginTop: 30 }}>~07/20</h6>
                    </div>
                  </List.Item>
                )}
              >
                {this.state.loading && this.state.hasMore && (
                  <div style={{}} className={css.demoLoadingContainer}>
                    <Spin />
                  </div>
                )}
              </List>
            </InfiniteScroll>
          </div>
        </Form>
      </Col>
    );
  }
}

export default MypageScrap;
