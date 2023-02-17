// @ts-nocheck
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import Cursor from './Cursor';
import Navigation from './Navigation';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Box minH='100vh' maxW='100vw' overflowX='hidden' bgColor='Brand.Gunmetal'>
      <Cursor />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <Ankle /> */}
      {/* <Footer /> */}
    </Box>
  );
};

export default App;
