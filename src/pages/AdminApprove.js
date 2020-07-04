import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Row } from 'antd';

import { Typography } from 'antd';

import { Table, Tag, Space } from 'antd';

const { Column } = Table;

const data = [
  {
    key: '1',
    firstName: '(주)KOSTA',

    age: '중소기업',
    address: '판교 유스페이스',
    tags: ['JAVA', '국비지원'],
  },
  {
    key: '2',
    firstName: '(주)KOSTA',

    age: '중소기업',
    address: '판교 유스페이스',
    tags: ['JAVA', '국비지원'],
  },
  {
    key: '3',
    firstName: '(주)KOSTA',

    age: '중소기업',
    address: '판교 유스페이스',
    tags: ['JAVA', '국비지원'],
  },
];

const { Text, Title } = Typography;

class AdminApprove extends Component {
  render() {
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
          <Table dataSource={data}>
            <Column title="기업명" dataIndex="firstName" key="firstName" />

            <Column title="기업규모" dataIndex="age" key="age" />
            <Column title="주소" dataIndex="address" key="address" />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={(tags) => (
                <>
                  {tags.map((tag) => (
                    <Tag color="blue" key={tag}>
                      {tag}
                    </Tag>
                  ))}
                </>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <Button>승인</Button>
                  <Button>거부</Button>
                </Space>
              )}
            />
          </Table>
        </Row>
      </>
    );
  }
}

export default AdminApprove;
