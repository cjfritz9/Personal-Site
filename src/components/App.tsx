// @ts-nocheck
import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import { SiteContext } from '../context/SiteContext';
import Cursor from './Cursor';
import Loading from './Loading';
import Navigation from './Navigation';
import About from './pages/About';
import Home from './pages/Home';

const App: React.FC = () => {
  const { isLoading } = useContext<any>(SiteContext);
  return (
    <Box minH='100vh' maxW='100vw' overflowX='hidden' bgColor='Brand.Gunmetal'>
      <Cursor />
      <Navigation />
      {isLoading && <Loading />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      {/* <Ankle /> */}
      {/* <Footer /> */}
    </Box>
  );
};

export default App;
