import * as React from 'react';
import { Link } from 'gatsby';

import heroImage from '../images/desk.svg';

import * as styles from 'styles/indexPage.module.scss';

const IndexPage = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>
      My mission is to create your dream website!
    </h1>
    <img src={heroImage} className={styles.hero} alt="hero desk illustration" />
    <p className={styles.paragraph}>
      My name is Jalal Mallah and I’m a Front-End Web Developer. Let’s get to
      know each other!
    </p>
    <Link to="/portfolio" className={styles.myProjectsButton}>
      My Projects
    </Link>
  </div>
);

export default IndexPage;
