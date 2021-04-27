import React from 'react';
import { useTranslation } from 'react-i18next';

import Title from 'components/Title/Title';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import * as styles from 'styles/contact.module.scss';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Title text={t('contact.title')} />
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
          <a
            href="https://github.com/JalalMallah"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            {t('contact.github')}
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
          <a
            href="https://www.linkedin.com/in/jalal-mallah"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            {t('contact.linkedin')}
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
          <a
            href="https://twitter.com/jalal_mallah_"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            {t('contact.twitter')}
          </a>
        </li>
      </ul>
    </>
  );
}
