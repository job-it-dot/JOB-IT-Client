import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { List, message, Spin, Button } from 'antd';
import reqwest from 'reqwest';
import css from './TestList.module.less';

import InfiniteScroll from 'react-infinite-scroller';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

const test = [
  {
    title: '(주)JYP엔터테인먼트',
    description: 'JYP엔터테인먼트 2020년 3분기 공개채용',
  },
  {
    title: '(주)하나금융티아이',
    description: '2020년 하나금융TI 신입사원 채용',
  },
  {
    title: '현재자동차(주)',
    description: 'SF이노베이션센터 신입/경력 상시채용',
  },
  {
    title: '(주)경동나비엔',
    description: '2020년 신입/경력사원 공개채용(관리직/기술직)',
  },
  {
    title: '(주)알토',
    description: '각 부문 신입 및 경력 사원 모집',
  },
  {
    title: '안전성평가연구소',
    description: '2020-2차 정규직 채용 공고',
  },
  {
    title: '오스템임플란트(주)',
    description: '각 부문 신입 및 경력 채용',
  },
];

class PartialSearch extends Component {
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
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={test}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta title={item.title} description={item.description} />
                <div>
                  <Button className={css.buttonssss}>상세보기</Button>
                </div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

export default PartialSearch;
