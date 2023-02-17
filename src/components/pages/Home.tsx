import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../Hero';

import Hero_Home from '../../assets/hero_home.jpg';
import CurrentProjects from '../CurrentProjects';

const Home: React.FC = () => {
  return (
    <Box>
      <Hero heading='HOME' imageLink={Hero_Home} />
      <CurrentProjects />
    </Box>
  );
};

export default Home;
