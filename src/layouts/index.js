import React from 'react';
import Header from 'components/Header/Header';

import * as styles from 'styles/layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}
