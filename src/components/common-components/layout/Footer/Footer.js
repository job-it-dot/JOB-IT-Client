import React from 'react';
import Logo from '../Logo/Logo';
import classes from './Footer.module.less';
import { Col, Typography } from 'antd';
import { PauseOutlined } from '@ant-design/icons';
import './Footer.css';

const { Link, Text } = Typography;

const Footer = () => {
  return (
    <>
      <div style={{ marginTop: 30 }}>
        <Col span={2} offset={11}>
          <Logo />
        </Col>
      </div>
      <div className={classes.footer_link1} style={{ marginTop: 20 }}>
        <Link href="/findpassword" className="link">인재 채용</Link>
        <Text className={classes.link_divider}>
          <PauseOutlined />
        </Text>
        <Link href="/abc" className="link">회사 소개</Link>
        <Text className={classes.link_divider}>
          <PauseOutlined />
        </Text>
        <Link href="/applyList" className="link">고객 지원</Link>
        <Text className={classes.link_divider}>
          <PauseOutlined />
        </Text>
        <Link href="/recruitDetail" className="link">보도 자료</Link>
        <Text className={classes.link_divider}>
          <PauseOutlined />
        </Text>
        <Link href="/companymain" className="link">API</Link>
        <Text className={classes.link_divider}>
          <PauseOutlined />
        </Text>
        <Link href="/apply" className="link">제휴 신청</Link>
      </div>
      <div className={classes.align} style={{ marginTop: 14 }}>
        <Text>©2020 KOFI WORKS, INC. 모든 권리는 KOFI WORKS에 있습니다.</Text>
        <br />
        <Text>
          여기서 언급된 다른 모든 <Link className="link">상표</Link>는 각 소유권자들의 자산입니다.
        </Text>
      </div>
      <div className={classes.align}>
        <Link className="link">개인정보 처리방침</Link>
        <Text className={classes.link_divider}>
          <PauseOutlined />
        </Text>
        <Link className="link">법률 관련 문서</Link>
        <Text className={classes.link_divider}>
          <PauseOutlined />
        </Text>
        <Link className="link">이용 약관</Link>
        <Text className={classes.link_divider}>
          <PauseOutlined />
        </Text>
        <Link className="link">쿠키</Link>
      </div>
      <div className={classes.detail} style={{ marginTop: 20, marginBottom: 25 }}>
        <Text>코피 웍스 코퍼레이션 유한 회사</Text>
        <br />
        <Text>주소: 13494 경기도 성남시 분당구 삼평동 대왕판교로 670길 유스페이스2 B동 8층</Text>
        <br />
        <Text>
          대표 번호: 1577-1577 | 팩스 번호: (031)987-0822 | 이메일:{' '}
          <Link className="link">support@kofiworks.co.kr</Link>
        </Text>
        <br />
        <Text>
          사업자 등록 번호: 000-00-00000 | 통신 판매업 신고 번호: 어디-0000호 |{' '}
          <Link className="link">사업자정보확인</Link>
        </Text>
        <br />
        <Text>대표이사: 구리리, 설유라 | 개인정보 보호책임자: 설유라 대표이사</Text>
      </div>
    </>
  );
};

export default Footer;
