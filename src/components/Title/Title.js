import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './title.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

export default function Title({ text }) {
  return (
    <h2 className={styles.title}>
      <FontAwesomeIcon icon={faHashtag} /> {text}
    </h2>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
