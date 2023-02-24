import React from 'react';
import { Stack } from '@chakra-ui/react';
import Hero from '../Hero';
import ContactMe from '../ContactMe';

const Contact: React.FC = () => {
  return (
    <Stack>
      <Hero heading='CONTACT' />
      <ContactMe />
    </Stack>
  );
};

export default Contact;
