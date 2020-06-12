import React from 'react';
import { Layout as AntLayout } from 'antd';
import classes from './Layout.module.less';

const { Content } = AntLayout;

function Layout({ children }) {
  return (
    <AntLayout>
      <header className={classes.header}>
        <div className={classes.header_inner}>Header</div>
      </header>
      <Content className={classes.content}>
        <div className={classes.content_inner}>{children}</div>
      </Content>
      <footer className={classes.footer}>
        <div className={classes.footer_inner}>Footer</div>
      </footer>
    </AntLayout>
  );
}

export default Layout;
