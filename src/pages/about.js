import React from 'react';
import { useTranslation } from 'react-i18next';

import Skill from 'components/Skill/Skill';
import Title from 'components/Title/Title';

import * as styles from 'styles/about.module.scss';

export default function About() {
  const { t } = useTranslation();

  const skillsData = [
    {
      id: 0,
      label: t('about.html'),
      options: [],
    },
    {
      id: 1,
      label: t('about.css'),
      options: [
        'SASS',
        'RWD',
        'BEM',
        'flexbox',
        'grid',
        'CSS variables',
        'transitions',
        'animations',
      ],
    },
    {
      id: 2,
      label: t('about.js'),
      options: ['ES6', 'DOM manipulation', 'fetch API', 'ES modules'],
    },
    {
      id: 3,
      label: t('about.react'),
      options: ['hooks', 'context API'],
    },
    {
      id: 4,
      label: t('about.gatsby'),
      options: [],
    },
    {
      id: 5,
      label: t('about.routing'),
      options: ['react-router', 'reach-router'],
    },
    {
      id: 6,
      label: t('about.cssInJs'),
      options: ['styled-components'],
    },
    {
      id: 7,
      label: t('about.git'),
      options: ['git'],
    },
    {
      id: 8,
      label: t('about.hosting'),
      options: ['netlify', 'gh-pages'],
    },
    {
      id: 9,
      label: t('about.lang'),
      options: ['i18next'],
    },
    {
      id: 10,
      label: t('about.design'),
      options: ['figma'],
    },
    {
      id: 11,
      label: t('about.linux'),
      options: [],
    },
  ];

  return (
    <>
      <Title text={t('about.title')} />
      <p className={styles.bio}>{t('about.bio')}</p>
      <h3 className={styles.subtitle}>{t('about.listTitle')}</h3>
      <ul className={styles.list}>
        {skillsData.map(skill => (
          <Skill
            key={skill.id}
            id={skill.id}
            label={skill.label}
            options={skill.options}
          />
        ))}
      </ul>
    </>
  );
}
