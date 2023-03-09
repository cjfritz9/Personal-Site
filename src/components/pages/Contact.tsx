import React, { useEffect } from 'react';
import { Stack } from '@chakra-ui/react';
import Hero from '../Hero';
import ContactMe from '../ContactMe';
import MailForm from '../MailForm';
import { serverWarmup } from '../../api/EmailAPI';

const Contact: React.FC = () => {
  useEffect(() => {
    serverWarmup();
  }, []);
  return (
    <Stack>
      <Hero heading='CONTACT' />
      {/* <ContactMe /> */}
      <MailForm />
    </Stack>
  );
};

export default Contact;
