import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import Navigation from './Navigation';

const App: React.FC = () => {
  return (
    <Box minH='100vh' minW='100vw' overflowX='hidden' bgColor='Brand.Gunmetal'>
      <Navigation />
      <Routes>{/* <Route path='/' element={<Home />} /> */}</Routes>
      {/* <Ankle /> */}
      {/* <Footer /> */}
    </Box>
  );
};

export default App;
