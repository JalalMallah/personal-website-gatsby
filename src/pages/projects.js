import React from 'react';

import xxx from 'images/mockups/xxx.jpg';
// import apiHubMockup from 'images/mockups/api-hub.jpg';
// import formMockup from 'images/mockups/form-validation.jpg';
// import landingPageMockup from 'images/mockups/landing-page.jpg';
// import countdownMockup from 'images/mockups/new-year-countdown.jpg';

import * as styles from 'styles/projects.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <article className={styles.singleProject}>
        <h3 className={styles.subtitle}>API Hub</h3>
        <img src={xxx} alt="API Hub" className={styles.image} />
        <p className={styles.text}>
          This projects groups multiple API-based projects into one large
          project. The services that I've chosen include: quote generator,
          current weather, exchange rates, song lyrics and a meal finder.
        </p>
        <h4>Used technologies:</h4>
        <p>React / Styled components</p>
        <a
          href="https://jalalmallah.github.io/API-Hub/"
          target="_blank"
          className={styles.button}
        >
          <FontAwesomeIcon icon={faEye} /> View Project
        </a>
        <a
          href="https://github.com/JalalMallah/API-Hub"
          target="_blank"
          className={styles.button}
        >
          <FontAwesomeIcon icon={faGithubAlt} /> Link To Repo
        </a>
      </article>
    </div>
  );
}
