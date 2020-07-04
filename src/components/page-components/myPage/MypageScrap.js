import React, { Component } from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import css from './MyPage.module.less';

const columns = [
  {
    title: '기업명',
    dataIndex: 'name',
  },
  {
    title: '요건',
    dataIndex: 'age',
  },
  {
    title: '공고',
    dataIndex: 'address',
  },
  {
    title: '지원',
    dataIndex: 'button',
  },
  {
    title: '마감일',
    dataIndex: 'date',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `jobit(주) 테스ㅌㅌㅌㅌㅌ ${i}`,
    age: `대졸이상, java가능자 오라클가능자 자바스크립트가능자 다가능한사람`,
    address: `2020년 kosta web 과정 인재모집 중ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ ${i}`,
    button: (
      <Button className={css.buttonstyle} style={{ marginBottom: 60, right: 20 }}>
        즉시지원
      </Button>
    ),
    date: `~07/20`,
  });
}

class MyPageResumeList extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 50);
  };

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div style={{ marginTop: 20 }}>
        <div>
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading} className={css.sbutton}>
            삭제
          </Button>
        </div>
        <Table
          className="tableChange"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
        />
      </div>
    );
  }
}

export default MyPageResumeList;
