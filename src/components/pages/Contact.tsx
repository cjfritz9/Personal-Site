import React from 'react';
import { Stack } from '@chakra-ui/react';
import Hero from '../Hero';
import ContactMe from '../ContactMe';
import MailForm from '../MailForm';

const Contact: React.FC = () => {
  return (
    <Stack>
      <Hero heading='CONTACT' />
      {/* <ContactMe /> */}
      <MailForm />
    </Stack>
  );
};

export default Contact;
