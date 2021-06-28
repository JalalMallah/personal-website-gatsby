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
  console.clear();

  function extractImage(term) {
    const index = data.allFile.nodes.findIndex(node =>
      node.childImageSharp.gatsbyImageData.images.fallback.src.includes(term)
    );
    const image = getImage(data.allFile.nodes[index]);
    return image;
  }

  const projectsData = [
    {
      id: 0,
      title: 'API Hub',
      image: extractImage('apiHub'),
      repo: 'https://github.com/JalalMallah/API-Hub/tree/master',
      site: 'https://jalalmallah.github.io/API-Hub/',
      technologies: ['react', 'react-router', 'styled-components'],
    },
    {
      id: 1,
      title: t('projects.landingPage'),
      image: extractImage('landingPage'),
      repo:
        'https://github.com/JalalMallah/landing-page-with-modal/tree/master',
      site: 'https://jalalmallah.github.io/landing-page-with-modal/',
      technologies: ['react', 'react-router', 'sass'],
    },
    {
      id: 2,
      title: t('projects.form'),
      image: extractImage('form'),
      repo:
        'https://github.com/JalalMallah/form-validation-with-input-animation/tree/master',
      site:
        'https://jalalmallah.github.io/form-validation-with-input-animation/',
      technologies: ['react', 'css'],
    },
    {
      id: 3,
      title: t('projects.contacts'),
      image: extractImage('contacts'),
      repo: 'https://github.com/JalalMallah/contact-list-with-filter',
      site: 'https://contact-list-with-filter.netlify.app/',
      technologies: ['react', 'typescript', 'CSS modules'],
    },
    {
      id: 4,
      title: t('projects.countdown'),
      image: extractImage('countdown'),
      repo: 'https://github.com/JalalMallah/new-year-countdown/tree/master',
      site: 'https://jalalmallah.github.io/new-year-countdown/',
      technologies: ['javascript', 'sass'],
    },
    {
      id: 5,
      title: t('projects.quotes'),
      image: extractImage('quotes'),
      repo: 'https://github.com/JalalMallah/quote-generator',
      site: 'https://apiquotegenerator.netlify.app/',
      technologies: ['react', 'CSS modules'],
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
