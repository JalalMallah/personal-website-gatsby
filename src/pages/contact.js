import React from 'react';
import { useTranslation } from 'react-i18next';

import Title from 'components/Title/Title';
import ContactOption from 'components/ContactOption/ContactOption';
import List from 'components/List/List';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const { t } = useTranslation();

  const contactData = [
    {
      name: 'email',
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      href: 'mailto:hello@jalalmallah.io',
      label: 'hello@jalalmallah.io',
    },
    {
      name: 'github',
      icon: <FontAwesomeIcon icon={faGithub} />,
      href: 'https://github.com/JalalMallah',
      label: t('contact.github'),
    },
    {
      name: 'linkedin',
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      href: 'https://www.linkedin.com/in/jalal-mallah',
      label: t('contact.linkedin'),
    },
    {
      name: 'twitter',
      icon: <FontAwesomeIcon icon={faTwitter} />,
      href: 'https://twitter.com/jalal_mallah_',
      label: t('contact.twitter'),
    },
  ];

  return (
    <>
      <Title text={t('contact.title')} />
      <List>
        {contactData.map(item => (
          <ContactOption
            key={item.name}
            icon={item.icon}
            href={item.href}
            label={item.label}
          />
        ))}
      </List>
    </>
  );
}
