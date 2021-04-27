import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './text.module.scss';

export default function Text({ text }) {
  return <p className={styles.text}>{text}</p>;
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
};
