import React from 'react';
import { useTranslation } from 'react-i18next';

import * as styles from './footer.module.scss';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <p>
        {t('footer.text')}{' '}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
        .{' '}
        <a
          href="https://github.com/JalalMallah/personal-website-gatsby"
          target="_blank"
          rel="noreferrer"
        >
          {t('footer.source')}
        </a>
        .
      </p>
    </footer>
  );
}
