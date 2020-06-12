import React from 'react';
import classNames from 'classnames';
import classes from './Menu.module.less';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';

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
      <aside className={classes.aside}>
        <SearchOutlined />
        <BellOutlined />
      </aside>
    </>
  );
};

export default Menu;
