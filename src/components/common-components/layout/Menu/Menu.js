import React from 'react';
import classNames from 'classnames';
import classes from './Menu.module.less';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classNames(classes.item, classes.active)}>탐색</li>
          <li className={classes.item}>직군별 연봉</li>
          <li className={classes.item}>이력서</li>
          <li className={classes.item}>추천</li>
          <li className={classes.item}>이벤트</li>
          <li className={classes.item}>매치업</li>
        </ul>
      </nav>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Link to="/login">회원가입/로그인</Link>
          </li>
          <li className={classes.item}>기업 서비스</li>
        </ul>
      </nav>
      <aside className={classes.aside}>
        <SearchOutlined />
        <BellOutlined />
      </aside>
    </>
  );
};

export default Menu;
