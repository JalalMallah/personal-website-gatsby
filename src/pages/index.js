import React, { useContext } from 'react';
import { LanguageContext } from 'context/context';
import { Link } from 'gatsby';

import heroImage from '../images/desk.svg';

import * as styles from 'styles/indexPage.module.scss';

const IndexPage = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        {selectedLanguage === 'en'
          ? 'My mission is to create your dream website!'
          : 'Stworzę Twoją wymarzoną stronę internetową!'}
      </h1>
      <img
        src={heroImage}
        className={styles.hero}
        alt="hero desk illustration"
      />
      <p className={styles.paragraph}>
        {selectedLanguage === 'en'
          ? `My name is Jalal Mallah and I’m a Front-End Web Developer. Let’s get to know each other!`
          : 'Nazywam się Jalal Mallah i jestem Front-End Web Developerem. Poznajmy się bliżej!'}
      </p>
      <Link to="/projects" className={styles.myProjectsButton}>
        {selectedLanguage === 'en' ? 'My Projects' : 'Moje Projekty'}
      </Link>
    </div>
  );
};

export default IndexPage;
