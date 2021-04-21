import React, { useContext, useState } from 'react';
import { LanguageContext } from 'context/context';
import { Link } from 'gatsby';

import Navigation from 'components/Header/Navigation/Navigation';

import * as styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function handleLanguageChange(e) {
    setSelectedLanguage(e.target.value);
  }

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        JalalMallah
      </Link>
      <Navigation closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className={styles.languagePicker}
      >
        <option value="en">en</option>
        <option value="pl">pl</option>
      </select>
      <button className={styles.openSidebar} onClick={openSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}
