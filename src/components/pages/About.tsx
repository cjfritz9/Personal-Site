import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../Hero';

import AboutMe from '../AboutMe';

const About: React.FC = () => {
  return (
    <Box>
      <Hero heading='ABOUT' />
      <AboutMe />
    </Box>
  );
};

export default About;
