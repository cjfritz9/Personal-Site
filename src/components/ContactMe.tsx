import React, { useState } from 'react';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack
} from '@chakra-ui/react';
import NavLink from './NavLink';
import MailForm from './MailForm';

const ContactMe: React.FC = () => {
  const [emailText, setEmailText] = useState('dev.cjfritz@gmail.com');

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('dev.cjfritz@gmail.com');
    setEmailText('Copied To Clipboard!');
    setTimeout(() => {
      setEmailText('dev.cjfritz@gmail.com');
    }, 2500);
  };

  return (
    <Container>
      <Heading variant='contentHeading'>CONTACT ME</Heading>
      <Stack w='fit-content' gap='2.5rem' justify='space-between'>
        <Flex
          gap='1rem'
          w={['100%']}
          justify='space-between'
          alignItems={['center', 'left']}
          flexWrap='wrap'
        >
          <NavLink
            text='Denver, CO'
            altLink='https://goo.gl/maps/KDSv3stZVduxv6YLA'
            isExternal
          />
          <Box onClick={handleEmailCopy}>
            <NavLink isNonLink text={emailText} altLink='#' />
          </Box>
          <NavLink
            text='LinkedIn'
            altLink='https://www.linkedin.com/in/cj-fritz/'
            isExternal={true}
          />
          <NavLink
            text='GitHub'
            altLink='https://www.github.com/cjfritz9'
            isExternal={true}
          />
        </Flex>
        <MailForm />
      </Stack>
    </Container>
  );
};

export default ContactMe;
