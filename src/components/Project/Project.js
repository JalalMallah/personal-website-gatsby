import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './project.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function Project({ image, repo, site, technologies, title }) {
  return (
    <article className={styles.wrapper}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.technologies}>
        {technologies.map(item => (
          <span>{item}</span>
        ))}
      </div>
      <a href={site} target="_blank" rel="noreferrer" className={styles.button}>
        <FontAwesomeIcon icon={faEye} /> View Project
      </a>
      <a href={repo} target="_blank" rel="noreferrer" className={styles.button}>
        <FontAwesomeIcon icon={faGithubAlt} /> Repository
      </a>
    </article>
  );
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};
