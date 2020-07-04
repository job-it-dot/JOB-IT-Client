import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Statistic, Progress } from 'antd';

import { Card } from 'semantic-ui-react';
import { Feed, Icon } from 'semantic-ui-react';

class DashBoard extends Component {
  render() {
    return (
      <>
        <Row gutter={16} style={{ marginTop: 10, marginLeft: 3 }}>
          <Col span={6} style={{ border: '1px solid #e2e2e2' }}>
            <Card
              href="#card-example-link-card"
              header="Total Profit"
              meta="123456"
              image="https://image.flaticon.com/icons/svg/845/845665.svg"
            />
          </Col>
          <Col span={6} style={{ border: '1px solid #e2e2e2' }}>
            <Card
              href="/"
              header="New Cusomer"
              meta="123456"
              image="https://image.flaticon.com/icons/svg/860/860800.svg"
            />
          </Col>
          <Col span={6} style={{ border: '1px solid #e2e2e2' }}>
            <Card
              href="/"
              header="회원 승인 건"
              meta="13"
              image="https://image.flaticon.com/icons/svg/845/845665.svg"
            />
            <Icon name="users"></Icon>
          </Col>
          <Col span={6} style={{ border: '1px solid #e2e2e2' }}>
            <Card
              href="/"
              header="회원 승인 건"
              meta="13"
              image="https://image.flaticon.com/icons/svg/845/845665.svg"
            />
          </Col>
        </Row>

        <Row style={{ border: '1px solid #e2e2e2', marginTop: 10 }}>
          <Col span={12} style={{ textAlign: 'center' }}>
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" alt="없음" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Elliot Fu</Feed.User> added you as a friend
                    <Feed.Date>1 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" alt="없음" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Elliot Fu</Feed.User> added you as a friend
                    <Feed.Date>1 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" alt="없음" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Elliot Fu</Feed.User> added you as a friend
                    <Feed.Date>1 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Col>

          <Col span={12} style={{ textAlign: 'center' }}>
            <Statistic title="일반유저" value={112893} />
            <br />
            <Statistic title="기업" value={112893} />
            <br />
            <Statistic title="등록 공고" value={112893} />
            <br />
            <Statistic title="등록 공고" value={112893} />
          </Col>
        </Row>
        <Row style={{ border: '1px solid #e2e2e2', marginTop: 10 }}>
          <Col span={15} style={{ textAlign: 'center' }}>
            <Progress type="circle" percent={75} style={{ marginRight: 15 }} />
            <Progress type="circle" percent={70} />
          </Col>
          <Col span={9} style={{ textAlign: 'center' }}>
            <Statistic title="유저회원" value={112893} />
            <Statistic title="일일 방문자수" value={112893} />
          </Col>
        </Row>
      </>
    );
  }
}
export default DashBoard;
