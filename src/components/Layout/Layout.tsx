import React, { ReactElement } from 'react';
import styles from './Layout.module.scss';
import { Menu } from './Menu';

type LayoutTypes = {
  children: ReactElement;
  title: string;
};

export const Layout = ({ children, title }: LayoutTypes) => {
  document.title = title;
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.main}>
        <div className={styles.header}></div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
