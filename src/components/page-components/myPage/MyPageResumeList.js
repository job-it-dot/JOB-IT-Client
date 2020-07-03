import React, { Component } from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import css from './MyPage.module.less';

const columns = [
  {
    dataIndex: 'name',
  },
  {
    dataIndex: 'age',
  },
  {
    title: '공고',
    dataIndex: 'address',
  },
  {
    dataIndex: 'button',
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `jobit(주) ${i}`,
    age: `대졸이상, java가능자`,
    address: `2020년 kosta web 과정 인재모집 ${i}`,
    button: (
      <Button className={css.buttonstyle} style={{ marginBottom: 60 }}>
        즉시지원
      </Button>
    ),
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
    }, 1000);
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
        <div className="sbutton">
          <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading} className="sbutton">
            삭제
          </Button>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default MyPageResumeList;
