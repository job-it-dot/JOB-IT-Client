import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Space, Button } from 'antd';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';
import { List, Avatar } from 'antd';
import { Typography } from 'antd';
import { Pagination } from 'antd';

const { Text, Title } = Typography;

const { Option } = Select;

const data = [
  {
    title: '성실한 지원자 입니다.',
  },
  {
    title: '전산 직무 지원',
  },
  {
    title: '프론트 엔드 개발 지원',
  },
  {
    title: '백엔드 개발 지원',
  },
];

function onChange(date, dateString) {
  console.log(date, dateString);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class ShowApplyForm extends Component {
  render() {
    return (
      <>
        <Title level={2}>
          <Text type="secondary">입사지원 관리</Text>
        </Title>
        <Row>
          <Col span={10}>
            조회기간&nbsp;&nbsp;&nbsp;&nbsp;
            <Button>1주일</Button>
            <Button>1개월</Button>
          </Col>
          <Col span={7}>
            날짜&nbsp;
            <DatePicker onChange={onChange} />
          </Col>
          ~
          <Col span={6}>
            <DatePicker onChange={onChange} />
          </Col>
        </Row>
        <Row>
          마감여부&nbsp;&nbsp;&nbsp;&nbsp;
          <Col span={3}>
            <Select defaultValue="전체" style={{ width: 80 }} onChange={handleChange} size="small">
              <Option value="all">전체</Option>
              <Option value="ing">진행중</Option>
              <Option value="end">마감</Option>
            </Select>
          </Col>
          <Col span={3}>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;열람여부 </span>
          </Col>
          <Col span={5}>
            <Select defaultValue="전체" style={{ width: 80 }} onChange={handleChange} size="small">
              <Option value="all">전체</Option>
              <Option value="read">열람</Option>
              <Option value="noRead">미열람</Option>
            </Select>
          </Col>
          <Col span={8}>
            <Space align="baseline">
              <Input placeholder="검색 키워드 입력" size="small"></Input>
              <Button type="primary">검색</Button>
            </Space>
          </Col>
        </Row>
        <br />
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="김철수/4년대졸/"
              />
              <Button type="primary" size="small">
                지원취소
              </Button>
            </List.Item>
          )}
        />
        <div>
          <Pagination defaultCurrent={1} total={100} pageSize={5} />
        </div>
      </>
    );
  }
}
export default ShowApplyForm;
