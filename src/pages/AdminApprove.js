import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Row } from 'antd';

import { Typography } from 'antd';

import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: '기업명',
    dataIndex: 'name',
  },
  {
    title: '기업규모',
    dataIndex: 'scale',
  },
  {
    title: '태그',
    dataIndex: 'tag',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const approveButton = (data) => {
  console.log(data);
};

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: `KOSTA ${i}`,
    scale: '중소',
    tag: (
      <span size="middle">
        <Tag color="blue">자바</Tag>
        <Tag color="blue">국비교육</Tag>
      </span>
    ),
    action: (
      <Space size="middle">
        <Button onClick={() => approveButton(data[i])}>승인</Button>
        <Button onClick={() => approveButton(data[i])}>거부</Button>
      </Space>
    ),
  });
}

const { Text, Title } = Typography;

class AdminApprove extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };

  start = () => {
    this.setState({ loading: true });

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
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <>
        <Row>
          <Title level={4} style={{ marginTop: 30 }}>
            기업 승인 신청 현황
          </Title>
          <Text type={'secondary'} style={{ marginRight: 10, marginLeft: 20, marginTop: 20 }}>
            기업은 1page 당 최대10까지 보여집니다.
            <br />
            승인 버튼을 누르면 정식 회원 처리가 됩니다.
          </Text>
        </Row>
        <hr color="gray"></hr>

        <Row style={{ border: '1px solid #e2e2e2', marginTop: 10 }}></Row>
        <Row>
          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </Row>
      </>
    );
  }
}

export default AdminApprove;
