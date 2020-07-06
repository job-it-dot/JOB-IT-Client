import React, { Component } from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import css from './MyPage.module.less';

const columns = [
  {
    title: '회사명',
    dataIndex: 'address',
  },
  {
    title: '채용진행여부',
    dataIndex: 'progress',
  },
];

const data = [];

data.push({
  address: `한국소프트웨어인재개발원`,
  progress: `채용중 2개`,
});

data.push({
  address: `Kosta Web 인재개발원`,
  progress: `채용중 1개`,
});

data.push({
  address: `(주)경동나비엔`,
  progress: `채용중 2개`,
});

data.push({
  address: `(주)다보링크`,
  progress: `채용중 0개`,
});

data.push({
  address: `LGcns`,
  progress: `채용중 3개`,
});

data.push({
  address: `KT`,
  progress: `채용중 1개`,
});

class MypageAttention extends Component {
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
      <>
        <div>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
            className={css.sbutton}
            style={{ marginTop: 0 }}
          >
            삭제
          </Button>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
      </>
    );
  }
}

export default MypageAttention;
