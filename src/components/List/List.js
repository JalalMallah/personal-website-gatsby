import React from 'react';

import * as styles from './list.module.scss';

export default function List({ children }) {
  return <ul className={styles.list}>{children}</ul>;
}
