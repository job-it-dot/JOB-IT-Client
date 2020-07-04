import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';
import { Select } from 'antd';
import { List, Avatar } from 'antd';
import { Typography } from 'antd';
import { Pagination } from 'antd';
import moment from 'moment';

function handleChange(value) {
  console.log(`selected ${value}`);
}

const data = [
  {
    title: '웹 프론트 지원',
  },
  {
    title: 'ERP 개발/운영',
  },
  {
    title: 'SE 엔지니어',
  },
];

const { Text, Title } = Typography;

const { Option } = Select;

const dateFormat = 'YYYY/MM/DD';

class ShowApplyForm extends Component {
  render() {
    return (
      <>
        <Row>
          <Title level={4} style={{ marginTop: 30 }}>
            지원자 현황
          </Title>
          <Text type={'secondary'} style={{ marginRight: 10, marginLeft: 20, marginTop: 20 }}>
            이력서는 최대10까지 보여집니다.
            <br />
            통과 버튼을 누르면 서류 합격 처리가 됩니다.
          </Text>
        </Row>
        <hr color="gray"></hr>
        <Row style={{ border: '1px solid #e2e2e2' }}>
          <Col span={10}>
            <Text type={'secondary'} style={{ marginRight: 10, marginLeft: 10 }}>
              조회기간
            </Text>

            <Button style={{ marginRight: 6, marginLeft: 4, marginTop: 5 }}>1주일</Button>
            <Button style={{ marginRight: 5 }}>1개월</Button>
            <Button style={{ marginRight: 5 }}>2개월</Button>
            <Button style={{ marginRight: 5 }}>3개월</Button>

            <Text type={'secondary'} style={{ marginRight: 10, marginLeft: 10 }}>
              진행 여부
            </Text>
            <Select defaultValue="전체" style={{ width: 100, marginTop: 10 }} onChange={handleChange}>
              <Option value="all">전체</Option>
              <Option value="ing">진행중</Option>
              <Option value="end">마감</Option>
            </Select>

            <Text type={'secondary'} style={{ marginRight: 10, marginLeft: 10 }}>
              열람 여부
            </Text>
            <Select defaultValue="열람" style={{ width: 107, marginTop: 10 }} onChange={handleChange}>
              <Option value="all">전체</Option>
              <Option value="read">열람</Option>
              <Option value="noread">미열람</Option>
            </Select>
          </Col>

          <Col span={10}>
            <Text type={'secondary'} style={{ marginRight: 10, marginLeft: 23, marginTop: 10, marginBottom: 10 }}>
              날짜선택
            </Text>
            <DatePicker
              defaultValue={moment('2020/01/01', dateFormat)}
              format={dateFormat}
              style={{ width: 120, marginTop: 5 }}
            />
            <Text
              type={'secondary'}
              style={{ marginRight: 10, marginLeft: 10, marginTop: 10, marginBottom: 10, fontSize: 20 }}
            >
              ~
            </Text>
            <DatePicker defaultValue={moment('2020/12/12', dateFormat)} format={dateFormat} style={{ width: 120 }} />

            <Text type={'secondary'} style={{ marginRight: 10, marginLeft: 23 }}>
              채용공고
            </Text>
            <Select defaultValue="전체" style={{ marginTop: 10, width: 280 }} onChange={handleChange}>
              <Option value="all">전체</Option>
              <Option value="read">2020년KOSTA 신입/경력사원 공개채용(연구원)</Option>
              <Option value="noread">2020년 잡코리아 마케팅팀 인턴 채용</Option>
            </Select>
          </Col>
          <Col span={1}>
            <Button type="primary" style={{ height: 70, width: 90, marginTop: 3, marginBottom: 10 }}>
              검색
            </Button>
          </Col>
        </Row>
        <Row style={{ border: '1px solid #e2e2e2', marginTop: 10 }}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://image.flaticon.com/icons/png/512/484/484648.png" />}
                  title={<a href="https://www.naver.com">{item.title}</a>}
                  style={{ marginLeft: 20 }}
                  description="학사/인턴 경험 등"
                />

                <Button style={{ marginLeft: 540 }}>통과</Button>
                <Button style={{ marginLeft: 20 }}>탈락</Button>
              </List.Item>
            )}
          />
        </Row>
        <Row>
          <Pagination
            total={100}
            showTotal={(total) => `Total ${total} page`}
            defaultPageSize={20}
            defaultCurrent={1}
            style={{ marginLeft: 200, marginTop: 20 }}
          />
        </Row>
      </>
    );
  }
}
export default ShowApplyForm;
