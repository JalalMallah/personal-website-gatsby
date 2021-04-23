import React from 'react';
import Project from 'components/Project/Project';

import apihubMockup from 'images/mockups/hub.jpg';
import countdownMockup from 'images/mockups/countdown.jpg';
import formMockup from 'images/mockups/form.jpg';
import landingPageMockup from 'images/mockups/landing-page.jpg';

const projectsData = [
  {
    id: 0,
    title: 'API Hub',
    image: apihubMockup,
    repo: 'https://github.com/JalalMallah/API-Hub/tree/master',
    site: 'https://jalalmallah.github.io/API-Hub/',
    technologies: ['react', 'react-router', 'styled-components'],
  },
  {
    id: 1,
    title: 'Landing Page with Modal',
    image: landingPageMockup,
    repo: 'https://github.com/JalalMallah/landing-page-with-modal/tree/master',
    site: 'https://jalalmallah.github.io/landing-page-with-modal/',
    technologies: ['react', 'react-router', 'sass'],
  },
  {
    id: 2,
    title: 'Form with Validation',
    image: formMockup,
    repo:
      'https://github.com/JalalMallah/form-validation-with-input-animation/tree/master',
    site: 'https://jalalmallah.github.io/form-validation-with-input-animation/',
    technologies: ['react', 'css'],
  },
  {
    id: 3,
    title: 'New Year Countdown',
    image: countdownMockup,
    repo: 'https://github.com/JalalMallah/new-year-countdown/tree/master',
    site: 'https://jalalmallah.github.io/new-year-countdown/',
    technologies: ['javascript', 'sass'],
  },
];

export default function Projects() {
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
