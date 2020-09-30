import React from 'react';
import Fade from 'react-reveal';

import {
  ContactWrapper,
  ContactList,
  ContactListItem,
} from './ContactSectionStyles';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/Paragraph/Paragraph';
import { contactDetails } from '../../constatns/contactDetails';

const ContactSection = () => {
  return (
    <ContactWrapper>
      <Heading as="h2" align="left">
        <Fade cascade>Contact</Fade>
        <Fade cascade>details</Fade>
      </Heading>
      <ContactList>
        {contactDetails.map(({ title, content }) => (
          <ContactListItem key={title}>
            <Heading as="h3" small align="left" margin="0" bold>
              <Fade cascade>{title}</Fade>
            </Heading>
            {content.map(field => (
              <Fade key={field}>
                <Paragraph margin="0">{field}</Paragraph>
              </Fade>
            ))}
          </ContactListItem>
        ))}
      </ContactList>
    </ContactWrapper>
  );
};

export default ContactSection;
