import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import 'i18n/config';

import * as styles from 'styles/layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.site}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
