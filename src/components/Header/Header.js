import React, { useState } from 'react';
import { Link } from 'gatsby';

import Navigation from 'components/Header/Navigation/Navigation';

import * as styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleLanguagePickerClick() {
    console.log('pick language');
  }

  function openSidebar() {
    setIsSidebarOpen(true);
    console.log('open sidebar');
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
    console.log('close sidebar');
  }

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Jalal Mallah
      </Link>
      <Navigation closeSidebar={closeSidebar} isSidebarOpen={isSidebarOpen} />
      <button
        className={styles.languagePicker}
        onClick={handleLanguagePickerClick}
      >
        en <FontAwesomeIcon icon={faCaretDown} />
      </button>
      <button className={styles.openSidebar} onClick={openSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
}
