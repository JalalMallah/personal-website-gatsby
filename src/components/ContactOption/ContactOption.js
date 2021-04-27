import React from 'react';

import * as styles from './contactOption.module.scss';

export default function ContactOption({ href, icon, label }) {
  return (
    <li className={styles.contactOption}>
      {icon}
      <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
        {label}
      </a>
    </li>
  );
}
