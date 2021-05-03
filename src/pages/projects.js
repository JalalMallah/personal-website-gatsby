import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';

import Project from 'components/Project/Project';
import Title from 'components/Title/Title';
import Text from 'components/Text/Text';

import * as styles from 'styles/projects.module.scss';

export default function Projects({ data }) {
  const { t } = useTranslation();

  const projectsData = [
    {
      id: 0,
      title: 'API Hub',
      image: getImage(data.allFile.nodes[0]),
      repo: 'https://github.com/JalalMallah/API-Hub/tree/master',
      site: 'https://jalalmallah.github.io/API-Hub/',
      technologies: ['react', 'react-router', 'styled-components'],
    },
    {
      id: 1,
      title: t('projects.landingPage'),
      image: getImage(data.allFile.nodes[1]),
      repo:
        'https://github.com/JalalMallah/landing-page-with-modal/tree/master',
      site: 'https://jalalmallah.github.io/landing-page-with-modal/',
      technologies: ['react', 'react-router', 'sass'],
    },
    {
      id: 2,
      title: t('projects.form'),
      image: getImage(data.allFile.nodes[2]),
      repo:
        'https://github.com/JalalMallah/form-validation-with-input-animation/tree/master',
      site:
        'https://jalalmallah.github.io/form-validation-with-input-animation/',
      technologies: ['react', 'css'],
    },
    {
      id: 3,
      title: t('projects.countdown'),
      image: getImage(data.allFile.nodes[3]),
      repo: 'https://github.com/JalalMallah/new-year-countdown/tree/master',
      site: 'https://jalalmallah.github.io/new-year-countdown/',
      technologies: ['javascript', 'sass'],
    },
    {
      id: 4,
      title: t('projects.quotes'),
      image: getImage(data.allFile.nodes[4]),
      repo: 'https://github.com/JalalMallah/quote-generator',
      site: 'https://apiquotegenerator.netlify.app/',
      technologies: ['react', 'CSS modules'],
    },
    {
      id: 5,
      title: t('projects.calculator'),
      image: getImage(data.allFile.nodes[5]),
      repo: 'https://github.com/JalalMallah/web-calculator',
      site: 'https://sample-calculator.netlify.app/',
      technologies: ['javascript', 'sass'],
    },
  ];
  return (
    <>
      <Title text={t('projects.title')} />
      <Text text={t('projects.description')} />
      <div className={styles.projectsWrapper}>
        {projectsData.map(({ id, image, repo, site, technologies, title }) => (
          <Project
            key={id}
            image={image}
            repo={repo}
            site={site}
            technologies={technologies}
            title={title}
          />
        ))}
      </div>
    </>
  );
}

export const query = graphql`
  {
    allFile(
      filter: { extension: { eq: "jpg" }, sourceInstanceName: { eq: "images" } }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(quality: 85, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;
