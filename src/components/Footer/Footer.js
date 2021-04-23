import React from 'react';

import * as styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Built by Jalal Mallah with{' '}
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
        .{' '}
        <a
          href="https://github.com/JalalMallah/personal-website-gatsby"
          target="_blank"
          rel="noreferrer"
        >
          Source code
        </a>
        .
      </p>
    </footer>
  );
}
