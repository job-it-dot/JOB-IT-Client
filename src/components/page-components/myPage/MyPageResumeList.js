import React, { Component } from 'react';
import { List } from 'antd';

class MyPageResumeList extends Component {
  render() {
    const data = [
      {
        title: '이력서',
      },
      {
        title: '이력서',
      },
      {
        title: '이력서',
      },
      {
        title: '이력서',
      },
    ];
    return (
      <List
        style={{ marginTop: 70, marginLeft: 50 }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.title}</a>}
              //description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    );
  }
}

export default MyPageResumeList;
