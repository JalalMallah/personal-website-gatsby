import React from 'react';

import apihubMockup from 'images/mockups/hub.jpg';
import countdownMockup from 'images/mockups/countdown.jpg';
import formMockup from 'images/mockups/form.jpg';
import landingPageMockup from 'images/mockups/landing-page.jpg';

import * as styles from 'styles/projects.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <article className={styles.projectCard}>
        <h3 className={styles.subtitle}>API Hub</h3>
        <a
          href="https://jalalmallah.github.io/API-Hub/"
          target="_blank"
          rel="noreferrer"
          className={styles.imageLink}
        >
          <img src={apihubMockup} alt="API Hub" className={styles.image} />
        </a>
        <p className={styles.description}>
          This projects groups multiple API-based projects into one large
          project. The services that I've chosen include: quote generator,
          current weather, exchange rates, song lyrics and a meal finder.
        </p>
        <h4 className={styles.listTitle}>Used technologies:</h4>
        <ul className={styles.list}>
          <li>
            <span className={styles.itemMarker}>
              <FontAwesomeIcon icon={faBolt} />
            </span>
            React
          </li>
          <li>
            <span className={styles.itemMarker}>
              <FontAwesomeIcon icon={faBolt} />
            </span>
            Styled components
          </li>
          <li>
            <span className={styles.itemMarker}>
              <FontAwesomeIcon icon={faBolt} />
            </span>
            CSS Modules
          </li>
        </ul>
        <a
          href="https://jalalmallah.github.io/API-Hub/"
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          <FontAwesomeIcon icon={faEye} /> View Project
        </a>
        <a
          href="https://github.com/JalalMallah/API-Hub"
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          <FontAwesomeIcon icon={faGithubAlt} /> Link To Repo
        </a>
      </article>
    </div>
  );
}
