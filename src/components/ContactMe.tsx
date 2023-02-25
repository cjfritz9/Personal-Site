import React from 'react';
import { Container, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import NavLink from './NavLink';

const ContactMe: React.FC = () => {
  return (
    <Container>
      <Heading variant='contentHeading'>CONTACT ME</Heading>
      <Stack
        gap='1rem'
        w={['100%', 'fit-content']}
        alignItems={['center', 'left']}
      >
        <Heading color='Brand.Sienna' size='xl'>
          C.J. Fritz
        </Heading>
        <Divider borderColor='Brand.MetalBlue' />
        <Heading
          fontFamily='Poppins'
          fontSize='16px'
          pl='7px'
          color='Brand.Cyan'
          size='sm'
        >
          Denver, CO
        </Heading>
        <Heading
          fontFamily='Poppins'
          fontSize='16px'
          pl='7px'
          color='Brand.Cyan'
          size='sm'
        >
          dev.cjfritz@gmail.com
        </Heading>
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
      </Stack>
    </Container>
  );
};

export default ContactMe;
