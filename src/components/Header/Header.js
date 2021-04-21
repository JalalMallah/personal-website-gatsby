import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Navigation from 'components/Header/Navigation/Navigation';

import * as styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { i18n } = useTranslation();

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function switchLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        JalalMallah
      </Link>
      <Navigation closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <select onChange={switchLanguage} className={styles.languagePicker}>
        <option value="en">en</option>
        <option value="pl">pl</option>
      </select>
      <button className={styles.openSidebar} onClick={openSidebar}>
        <FontAwesomeIcon icon={faStream} />
      </button>
    </header>
  );
}
