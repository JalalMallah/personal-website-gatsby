import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import 'i18n/config';

import * as styles from 'styles/layout.module.scss';

export default function Layout({ children }) {
  function updateCssWithCalculatedVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  function debounce(callback, wait, immediate = false) {
    let timeout = null;

    return function () {
      const callNow = immediate && !timeout;
      const next = () => callback.apply(this, arguments);

      clearTimeout(timeout);
      timeout = setTimeout(next, wait);

      if (callNow) {
        next();
      }
    };
  }

  useEffect(() => {
    updateCssWithCalculatedVh();
    window.addEventListener(
      'resize',
      debounce(updateCssWithCalculatedVh, 100, true)
    );

    return () => {
      window.removeEventListener(
        'resize',
        debounce(updateCssWithCalculatedVh, 100, true)
      );
    };
  }, []);

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
