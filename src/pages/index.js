import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import heroImage from '../images/desk.svg';

import * as styles from 'styles/indexPage.module.scss';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{t('home.title')}</h1>
      <img
        src={heroImage}
        className={styles.hero}
        alt="hero desk illustration"
      />
      <p className={styles.paragraph}>{t('home.subtitle')}</p>
      <Link to="/projects" className={styles.myProjectsButton}>
        {t('home.buttonText')}
      </Link>
    </div>
  );
};

export default IndexPage;
