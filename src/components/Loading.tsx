import React, { useState } from 'react';
import { Box, Heading, Skeleton } from '@chakra-ui/react';
import Hero from './Hero';

const Loading: React.FC = () => {
  const [transitionCount, setTransitionCount] = useState(0);

  if (transitionCount < 2) {
    const timer = setInterval(() => {
      setTransitionCount((prev) => prev + 1);
    }, 200);

    setTimeout(() => {
      clearInterval(timer);
    }, 1500);
  }

  return (
    <Box pos='absolute' zIndex='20' h='1200px' maxW='100vw' w='100%'>
      <Box
        id='loading-hero-container'
        clipPath={
          transitionCount === 0
            ? 'inset(0 0 100% 0)'
            : transitionCount === 1
            ? 'inset(0 0 0 0)'
            : 'inset(0 0 100% 0)'
        }
        transition='clip-path .5s linear'
        h='480px'
      >
        <Hero heading='' />
      </Box>
      <Box
        bgColor='Brand.Gunmetal'
        opacity={transitionCount === 0 ? 0 : transitionCount === 1 ? 1 : 0}
        transition='opacity .6s ease'
        // h='400px'
      >
        {/* <Skeleton
          ml='6rem'
          mt='6rem'
          h='4.5rem'
          w='fit-content'
          startColor='Brand.PaleBlue'
          endColor='Brand.MetalBlue'
          speed={2}
        >
          <Heading w='fit-content' size='4xl' fontFamily='Poppins'>
            Lorem ipsum dolor sit amet
          </Heading>
        </Skeleton>
        <Skeleton
          mx='6rem'
          my='3rem'
          startColor='Brand.PaleBlue'
          endColor='Brand.MetalBlue'
          speed={2}
        > */}
        <Box h='600px' w='100%' />
        {/* </Skeleton> */}
      </Box>
    </Box>
  );
};

export default Loading;
