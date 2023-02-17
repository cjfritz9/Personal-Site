import React, { useState } from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Navigation: React.FC = () => {
  return (
    <Flex
      w='100vw'
      h='64px'
      bgColor='Brand.MetalBlue'
      justifyContent='space-between'
      alignItems='center'
      px='6rem'
      pos='relative'
    >
      {/* <Box
        pos='absolute'
        h='100vh'
        w='1px'
        bgColor='Brand.Cyan'
        left='50%'
        top='0%'
      />
      <Box
        pos='absolute'
        w='100vw'
        h='1px'
        bgColor='Brand.Cyan'
        left='0%'
        top='50%'
      /> */}
      <Box>
        <Link
          cursor='pointer'
          fontFamily='Fira Mono'
          fontSize='36'
          fontWeight='700'
          letterSpacing='-1px'
        >
          {'</>'}
        </Link>
      </Box>
      <Box w='90vw' pos='absolute' pointerEvents='none'>
        <Text
          color='Brand.Cyan'
          userSelect='none'
          fontSize='32'
          fontFamily='Poppins'
          fontWeight='bold'
          letterSpacing='1px'
          textAlign='center'
        >
          C.J. Fritz
        </Text>
      </Box>
      <Flex gap='3rem'>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Demos</Link>
      </Flex>
    </Flex>
  );
};

export default Navigation;
