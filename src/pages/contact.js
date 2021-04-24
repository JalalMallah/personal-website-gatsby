import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import * as styles from 'styles/contact.module.scss';

export default function Contact() {
  return (
    <>
      <h2 className={styles.title}>Let's get in touch!</h2>
      <ul className={styles.contactList}>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          <a
            href="mailto:hello@jalalmallah.io"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            hello@jalalmallah.io
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <a href="#" className={styles.link} target="_blank" rel="noreferrer">
            GitHub Profile
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
          <a href="#" className={styles.link} target="_blank" rel="noreferrer">
            Linked In Profile
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
          <a href="#" className={styles.link} target="_blank" rel="noreferrer">
            Twitter Profile
          </a>
        </li>
      </ul>
    </>
  );
}
