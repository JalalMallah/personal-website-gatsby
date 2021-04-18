import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as styles from './Navigation.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navigation({ closeSidebar, isSidebarOpen }) {
  const navClassName = isSidebarOpen
    ? `${styles.nav} ${styles.open}`
    : `${styles.nav} ${styles.close}`;

  return (
    <nav className={navClassName}>
      <button className={styles.closeSidebar} onClick={closeSidebar}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            to="/"
            className={styles.link}
            activeClassName={styles.activeLink}
            onClick={closeSidebar}
          >
            Home
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="/portfolio"
            className={styles.link}
            activeClassName={styles.activeLink}
            onClick={closeSidebar}
          >
            Portfolio
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="/about"
            className={styles.link}
            activeClassName={styles.activeLink}
            onClick={closeSidebar}
          >
            About
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="/contact"
            className={styles.link}
            activeClassName={styles.activeLink}
            onClick={closeSidebar}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
};
