import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import useMousePosition from '../utils/helpers';
import Navigation from './Navigation';
import Home from './pages/Home';

const App: React.FC = () => {
  const [mouseTrail, setMouseTrail] = useState<any>([]);
  const mousePosition = useMousePosition();

  useEffect(() => {
    setMouseTrail((prev: any) => [...prev, mousePosition]);
  }, [mousePosition, setMouseTrail]);

  return (
    <Box minH='100vh' maxW='100vw' overflowX='hidden' bgColor='Brand.Gunmetal'>
      {mouseTrail.length >= 5 && (
        <Box>
          <Box
            pos='absolute'
            top={mouseTrail[0].y}
            left={mouseTrail[0].x}
            bgColor='#E0FBFC25'
            h='25px'
            w='25px'
            borderRadius='50%'
            zIndex='1000'
          />
          <Box
            pos='absolute'
            top={mouseTrail[1].y}
            left={mouseTrail[1].x}
            bgColor='#E0FBFC25'
            h='25px'
            w='25px'
            borderRadius='50%'
            zIndex='1000'
          />
          <Box
            pos='absolute'
            top={mouseTrail[2].y}
            left={mouseTrail[2].x}
            bgColor='#E0FBFC25'
            h='25px'
            w='25px'
            borderRadius='50%'
            zIndex='1000'
          />
          <Box
            pos='absolute'
            top={mouseTrail[3].y}
            left={mouseTrail[3].x}
            bgColor='#E0FBFC25'
            h='25px'
            w='25px'
            borderRadius='53%'
            zIndex='1000'
          />
          <Box
            pos='absolute'
            top={mouseTrail[4].y}
            left={mouseTrail[4].x}
            bgColor='#E0FBFC25'
            h='25px'
            w='25px'
            borderRadius='50%'
            zIndex='1000'
          />
        </Box>
      )}
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
