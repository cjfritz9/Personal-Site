import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import Hero from './Hero';
import Navigation from './Navigation';

import Hero_Home from '../assets/hero_home.jpg';

const App: React.FC = () => {
  return (
    <Box minH='100vh' minW='100vw' overflowX='hidden' bgColor='Brand.Gunmetal'>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<Hero heading='HOME' imageLink={Hero_Home} />}
        />
      </Routes>
      {/* <Ankle /> */}
      {/* <Footer /> */}
    </Box>
  );
};

export default App;
