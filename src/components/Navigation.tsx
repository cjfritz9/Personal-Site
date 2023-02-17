import React, { useState } from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Navigation: React.FC = () => {
  return (
    <Flex
      w='100vw'
      h='64px'
      bgColor='Brand.Gunmetal'
      justifyContent='space-between'
      alignItems='center'
      px='6rem'
      pos='relative'
      dropShadow='10px -10px 10px #293241'
      zIndex={5}
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
      <Box w='20%'>
        <Link
          color='Brand.Cyan'
          userSelect='none'
          fontSize='32'
          // letterSpacing='1px'
          textAlign='center'
        >
          C.J. Fritz
        </Link>
      </Box>
      <Flex gap='3rem' w='20%' justifyContent='flex-end'>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Blog</Link>
        <Link>Demos</Link>
      </Flex>
    </Flex>
  );
};

export default Navigation;
