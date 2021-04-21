import React from 'react';
import AppProvider from 'context/context';
import Header from 'components/Header/Header';

import * as styles from 'styles/layout.module.scss';

export default function Layout({ children }) {
  return (
    <AppProvider>
      <Header />
      <main className={styles.main}>{children}</main>
    </AppProvider>
  );
}
