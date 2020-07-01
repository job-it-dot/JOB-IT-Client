import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { Button } from 'antd';
import { List, Typography } from 'antd';
import { Avatar } from 'antd';
import { Pagination } from 'antd';

const { Link } = Typography;
const { Text, Title } = Typography;

const data = [
  {
    title: '(주)엔키아',
  },
  {
    title: '(주)모비젠',
  },
  {
    title: 'KT',
  },
  {
    title: 'KOSTA',
  },
];

class CompanyAproveForm extends Component {
  render() {
    return (
      <>
        <Title level={2}>
          <Text type="secondary">신청 기업 목록</Text>
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="중소기업/등"
              />
              <Button type="primary" size="small">
                승인
              </Button>
              <Button type="primary" size="small">
                거부
              </Button>
            </List.Item>
          )}
        />
        <div>
          <Pagination defaultCurrent={1} total={100} pageSize={5} />
        </div>
      </>
      //         <Row>
      //             <List
      //             size="large"
      //   header={<div>승인 신청 기업 목록</div>}
      //   dataSource={data}
      //   renderItem={item => (
      //     <List.Item>
      //       <Link href="https://ant.design" target="_blank">
      //         {item}
      //        </Link>
      //       <Col xs={{ span: 1, offset: 1 }} l    g={{ span: 1, offset: 1 }}>
      //         <Button type="primary">
      //         승인
      //         </Button>
      //         </Col>
      //         <Col xs={{ span: 10, offset: 1 }} lg={{ span: 1, offset: 4 }}>
      //         <Button type="primary">
      //         거부
      //         </Button>
      //         </Col>
      //     </List.Item>
      //   )}
      // />
      //       </Row>
    );
  }
}

export default CompanyAproveForm;
