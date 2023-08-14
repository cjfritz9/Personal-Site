// @ts-nocheck
import { Box, useMediaQuery } from '@chakra-ui/react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router';
import { SiteContext } from '../context/SiteContext';
import Cursor from './Cursor';
import Loading from './Loading';
import Navigation from './Navigation';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Demos from './pages/Portfolio';
import Home from './pages/Home';

const App: React.FC = () => {
  const [isGreaterThan768] = useMediaQuery(['(min-width: 768px)']);
  const { isLoading } = useContext<any>(SiteContext);

  return (
    <Box
      minH='100vh'
      maxW='100vw'
      overflowX='hidden'
      bgColor='Brand.Gunmetal'
      mt='72px'
    >
      {isGreaterThan768 && <Cursor />}
      <Navigation />
      {isLoading && <Loading />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/portfolio' element={<Demos />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Box>
  );
};

export default App;
