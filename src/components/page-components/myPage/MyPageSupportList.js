import React, { Component } from 'react';
import { List, Tag } from 'antd';

class MyPageSupportList extends Component {
  render() {
    const data = [
      {
        title: '지원목록',
      },
      {
        title: '지원목록',
      },
      {
        title: '지원목록',
      },
      {
        title: '지원목록',
      },
    ];

    return (
      <List
        style={{ marginTop: 70, marginLeft: 50, width: 550 }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              //description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <Tag color="success">지원완료</Tag>
            <Tag color="processing">지원중</Tag>
            <Tag color="error">채용완료</Tag>
          </List.Item>
        )}
      />
    );
  }
}

export default MyPageSupportList;
