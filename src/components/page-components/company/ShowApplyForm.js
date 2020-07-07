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
  state = {
    onedate: '',
    twodate: '',
    afterdate: '',
    step: '',
    read: '',
    recruit: '',
  };

  clickDate = (data) => {
    this.setState({
      onedate: data,
    });
    console.log(data);
  };

  beforeDateChange = (data) => {
    this.setState({
      twodate: data,
    });
    console.log(data);
  };
  afterDateChange = (data) => {
    this.setState({
      afterdate: data,
    });
    console.log(data);
  };

  stepChange = (data) => {
    this.setState({
      step: data,
    });
  };

  readChange = (data) => {
    this.setState({
      read: data,
    });
  };

  recruitChange = (data) => {
    this.setState({
      recruit: data,
    });
  };

  //검색 할때 모든 조건 값 받아온다.
  onSearch = (data) => {
    console.log(`검색조건 값은 : ${this.state.onedate} , ${this.state.twodate}, ${this.state.afterdate}, ${this.state.step}, 
    ${this.state.read}, ${this.state.recruit}`);
  };

  recruitList = (data) => {
    console.log(data);
  };

  //통과 버튼 클릭시 이력서 id 값을 받아온다.
  // pass = (recruit_id) => {
  //   console.log(1);
  // }

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

            <Button
              style={{ marginRight: 6, marginLeft: 4, marginTop: 5 }}
              value="1week"
              onClick={() => this.clickDate('1주일')}
            >
              1주일
            </Button>
            <Button style={{ marginRight: 5, marginTop: 5 }} value="1month" onClick={() => this.clickDate('1개월')}>
              1개월
            </Button>
            <Button style={{ marginRight: 5, marginTop: 5 }} value="2month" onClick={() => this.clickDate('2개월')}>
              2개월
            </Button>
            <Button
              style={{ marginRight: 5, marginTop: 5 }}
              value="3month"
              onClick={(event) => this.clickDate(event.target.value)}
            >
              3개월
            </Button>

            <Text type={'secondary'} style={{ marginRight: 10, marginLeft: 10 }}>
              진행 여부
            </Text>
            <Select defaultValue="선택" style={{ width: 100, marginTop: 10 }} onChange={this.stepChange}>
              <Option value="all_step">전체</Option>
              <Option value="ing">진행중</Option>
              <Option value="end">마감</Option>
            </Select>

            <Text type={'secondary'} style={{ marginRight: 10, marginLeft: 10 }}>
              열람 여부
            </Text>
            <Select defaultValue="선택" style={{ width: 107, marginTop: 10 }} onChange={this.readChange}>
              <Option value="all_read">전체</Option>
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
              onChange={this.beforeDateChange}
            />
            <Text
              type={'secondary'}
              style={{ marginRight: 10, marginLeft: 10, marginTop: 10, marginBottom: 10, fontSize: 20 }}
            >
              ~
            </Text>
            <DatePicker
              defaultValue={moment('2020/12/12', dateFormat)}
              format={dateFormat}
              style={{ width: 120 }}
              onChange={this.afterDateChange}
            />

            <Text type={'secondary'} style={{ marginRight: 10, marginLeft: 23 }}>
              채용공고
            </Text>
            <Select defaultValue="선택" style={{ marginTop: 10, width: 280 }} onChange={this.recruitChange}>
              <Option value="allRecruit">전체</Option>
              <Option value="1.Recruit">2020년KOSTA 신입/경력사원 공개채용(연구원)</Option>
              <Option value="2.Recruit">2020년 잡코리아 마케팅팀 인턴 채용</Option>
            </Select>
          </Col>
          <Col span={1}>
            <Button
              type="primary"
              style={{ height: 70, width: 90, marginTop: 3, marginBottom: 10 }}
              onClick={this.onSearch}
            >
              검색
            </Button>
          </Col>
        </Row>
        <Row style={{ border: '1px solid #e2e2e2', marginTop: 10 }}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            onClick={this.recruitList}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Button style={{ marginLeft: 540 }} value={item.title} onClick={() => this.recruitList(item.title)}>
                    통과
                  </Button>,
                  <Button style={{ marginLeft: 20 }} value={item.title} onClick={() => this.recruitList(item.title)}>
                    탈락
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src="https://image.flaticon.com/icons/png/512/484/484648.png" />}
                  title={item.title}
                  style={{ marginLeft: 20 }}
                  description="학사/인턴 경험 등"
                  onClick={() => this.recruitList(item.title)}
                />
                {/* <Button style={{ marginLeft: 540 }} onClick={this.pass} key={1}>통과</Button>
                <Button style={{ marginLeft: 20 }} onClick={this.fall}>탈락</Button> */}
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
