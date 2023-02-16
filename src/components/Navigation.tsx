import React, { useState } from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Navigation: React.FC = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  return (
    <Flex
      w='100vw'
      h='64px'
      bgColor='Brand.MetalBlue'
      justifyContent='space-between'
      alignItems='center'
      px='6rem'
    >
      <Box
        cursor='pointer'
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
      >
        <Link
          fontFamily='Fira Mono'
          fontSize='36'
          fontWeight='700'
          letterSpacing='-1px'
        >
          {'</>'}
        </Link>
      </Box>
      <Box>
        <Text color='Brand.Cyan' userSelect='none' fontSize='32' fontFamily='Fira Mono'>C.J. Fritz</Text>
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
