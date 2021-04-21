import React, { useContext } from 'react';
// import { LanguageContext } from 'context/context';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as styles from './Navigation.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navigation({ closeSidebar, isSidebarOpen }) {
  // const { selectedLanguage } = useContext(LanguageContext);

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
            {/* {selectedLanguage === 'en' ? 'Home' : 'Główna'} */}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            to="/projects"
            className={styles.link}
            activeClassName={styles.activeLink}
            onClick={closeSidebar}
          >
            Projects
            {/* {selectedLanguage === 'en' ? 'Projects' : 'Projekty'} */}
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
            {/* {selectedLanguage === 'en' ? 'About' : 'O Mnie'} */}
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
            {/* {selectedLanguage === 'en' ? 'Contact' : 'Kontakt'} */}
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
