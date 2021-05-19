import React from 'react';
import { useTranslation } from 'react-i18next';

import Skill from 'components/Skill/Skill';
import Title from 'components/Title/Title';
import Text from 'components/Text/Text';
import List from 'components/List/List';

import { v4 as uuidv4 } from 'uuid';

import * as styles from 'styles/about.module.scss';

export default function About() {
  const { t } = useTranslation();

  const skillsData = [
    {
      id: uuidv4(),
      label: t('about.html'),
      options: [],
    },
    {
      id: uuidv4(),
      label: t('about.css'),
      options: [
        'SASS',
        'RWD',
        'BEM',
        'flexbox',
        'grid',
        'CSS custom properties',
        'transitions',
        'animations',
      ],
    },
    {
      id: uuidv4(),
      label: t('about.js'),
      options: ['ES6', 'DOM manipulation', 'fetch API', 'ES modules'],
    },
    {
      id: uuidv4(),
      label: t('about.react'),
      options: ['hooks', 'context API'],
    },
    {
      id: uuidv4(),
      label: t('about.gatsby'),
      options: [],
    },
    {
      id: uuidv4(),
      label: t('about.stateMngmt'),
      options: ['redux'],
    },
    {
      id: uuidv4(),
      label: t('about.routing'),
      options: ['react-router', 'reach-router'],
    },
    {
      id: uuidv4(),
      label: t('about.cssInJs'),
      options: ['CSS modules', 'styled-components'],
    },
    {
      id: uuidv4(),
      label: t('about.git'),
      options: ['git'],
    },
    {
      id: uuidv4(),
      label: t('about.hosting'),
      options: ['netlify', 'gh-pages', 'OVH'],
    },
    {
      id: uuidv4(),
      label: t('about.lang'),
      options: ['i18next'],
    },
    {
      id: uuidv4(),
      label: t('about.design'),
      options: ['figma'],
    },
    {
      id: uuidv4(),
      label: t('about.linux'),
      options: [],
    },
  ];

  return (
    <>
      <Title text={t('about.title')} />
      <Text text={t('about.bio')} />
      <h3 className={styles.subtitle}>{t('about.listTitle')}</h3>
      <List>
        {skillsData.map(skill => (
          <Skill
            key={skill.id}
            id={skill.id}
            label={skill.label}
            options={skill.options}
          />
        ))}
      </List>
      <Text text={t('about.private')} />
    </>
  );
}
