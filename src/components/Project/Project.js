import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

import * as styles from './project.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function Project({ image, repo, site, technologies, title }) {
  const { t } = useTranslation();

  return (
    <figure className={styles.projectContainer}>
      <figcaption className={styles.title}>{title}</figcaption>
      <div className={styles.imageContainer}>
        <a href="#" className={styles.imageLink}>
          <GatsbyImage image={image} alt={title} className={styles.image} />
        </a>
        <div className={styles.buttonsContainer}>
          <a
            href={site}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            <FontAwesomeIcon icon={faEye} />
            {t('projects.view')}
          </a>
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className={styles.button}
          >
            <FontAwesomeIcon icon={faGithubAlt} />
            {t('projects.repo')}
          </a>
        </div>
      </div>
      <div className={styles.technologies}>
        {technologies.map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </figure>
  );
}

Project.propTypes = {
  image: PropTypes.object.isRequired,
  repo: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
