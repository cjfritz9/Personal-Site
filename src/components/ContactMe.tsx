import React from 'react';
import { Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import NavLink from './NavLink';

const ContactMe: React.FC = () => {
  return (
    <Stack>
      <Heading
        userSelect='none'
        ml='6rem'
        pt='3rem'
        pb='6rem'
        fontFamily='Poppins'
        color='Brand.MetalBlue'
        size='4xl'
        textAlign='left'
        w='fit-content'
        textShadow='0 0 10px #FFFFFF25'
      >
        CONTACT ME
      </Heading>
      <Stack mx='6rem !important' gap='1rem' w='fit-content'>
        <Heading color='Brand.Sienna' size='xl'>
          C.J. Fritz
        </Heading>
        <Divider borderColor='Brand.MetalBlue' />
        <Heading color='Brand.Cyan' size='sm'>
          Denver, CO
        </Heading>
        <Heading color='Brand.Cyan' size='sm'>
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
    </Stack>
  );
};

export default ContactMe;
