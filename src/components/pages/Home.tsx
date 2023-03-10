import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../Hero';

import CurrentProjects from '../CurrentProjects';

const Home: React.FC = () => {
  return (
    <Box>
      <Hero heading='HOME' />
      <CurrentProjects />
    </Box>
  );
};

export default Home;
