import React, { Component } from 'react';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DollarTwoTone } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';

class CompanyMenu extends Component {
  state = {
    current: 'mail',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <>
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item>
            <Link to="/CompanyMain">기업 회원</Link>
          </Menu.Item>

          <Menu.Item>공고 등록</Menu.Item>
          <SubMenu title="공고/자원관리">
            <Menu.Item>공고등록하기</Menu.Item>
            <Menu.Item>전체 채용공고</Menu.Item>
            <Menu.Item>지원자관리</Menu.Item>
            <Menu.Item>차단내역</Menu.Item>
            <Menu.Item>FAQ</Menu.Item>
          </SubMenu>

          <SubMenu title="인재검색">
            <Menu.Item>인재검색하기</Menu.Item>
            <SubMenu title="인재관리">
              <Menu.Item>스크랩 인재</Menu.Item>
              <Menu.Item>우리기업 관심인재</Menu.Item>
              <Menu.Item>포지션 제안 인재</Menu.Item>
            </SubMenu>

            <Menu.Item>
              <Link to="/applyList">지원자관리</Link>
            </Menu.Item>

            <Menu.Item>차단내역</Menu.Item>
            <Menu.Item>FAQ</Menu.Item>
          </SubMenu>
          <Menu.Item>헤드헌팅 의뢰</Menu.Item>

          <SubMenu title="기업 라운지">
            <Menu.Item>HR/연봉자료</Menu.Item>
            <Menu.Item>HR포럼/세미나</Menu.Item>
            <Menu.Item>서비스제안/문의</Menu.Item>
            <Menu.Item>공지사항</Menu.Item>
          </SubMenu>
          <SubMenu title="기업정보">
            <Menu.Item>기업정보관리</Menu.Item>
            <Menu.Item>공고 상단 노출 신청</Menu.Item>
            <Menu.Item>로그인 관리</Menu.Item>
            <Menu.Item>알림수신 설정</Menu.Item>
          </SubMenu>

          <SubMenu title="서비스 안내" icon={<DollarTwoTone />}>
            <Menu.Item>유료채용광고 서비스</Menu.Item>
            <Menu.Item>배너광고</Menu.Item>
            <Menu.Item>기업회원패키지</Menu.Item>
            <Menu.Item>FAQ</Menu.Item>
          </SubMenu>
        </Menu>

        <div>
          <Menu>
            <Menu.Item onClick={this.props.handleClick}>일반메뉴</Menu.Item>
          </Menu>
        </div>
      </>
    );
  }
}

export default CompanyMenu;
