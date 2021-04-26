import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './skill.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

export default function Skill({ id, label, options }) {
  return (
    <li className={styles.skill}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </div>
      <div className={styles.content}>
        {label}
        {options.map(option => (
          <span key={id}>{option}</span>
        ))}
      </div>
    </li>
  );
}

Skill.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
};
