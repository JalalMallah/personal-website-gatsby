import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import Project from 'components/Project/Project';

export default function Projects({ data }) {
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
      title: 'Landing Page with Modal',
      image: getImage(data.allFile.nodes[1]),
      repo:
        'https://github.com/JalalMallah/landing-page-with-modal/tree/master',
      site: 'https://jalalmallah.github.io/landing-page-with-modal/',
      technologies: ['react', 'react-router', 'sass'],
    },
    {
      id: 2,
      title: 'Form with Validation',
      image: getImage(data.allFile.nodes[2]),
      repo:
        'https://github.com/JalalMallah/form-validation-with-input-animation/tree/master',
      site:
        'https://jalalmallah.github.io/form-validation-with-input-animation/',
      technologies: ['react', 'css'],
    },
    {
      id: 3,
      title: 'New Year Countdown',
      image: getImage(data.allFile.nodes[3]),
      repo: 'https://github.com/JalalMallah/new-year-countdown/tree/master',
      site: 'https://jalalmallah.github.io/new-year-countdown/',
      technologies: ['javascript', 'sass'],
    },
  ];
  return (
    <>
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
