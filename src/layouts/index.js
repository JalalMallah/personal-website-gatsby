import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import 'i18n/config';

import * as styles from 'styles/layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.site}>
      <Helmet defer={false}>
        <title>Jalal Mallah - Web Developer</title>
        <meta
          name="description"
          content="The personal website and portfolio of Jalal Mallah, a Front-End Web Developer"
        />
        <meta
          name="keywords"
          content="react, javascript, web development, website"
        />
        <meta name="author" content="Jalal Mallah" />
      </Helmet>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
