import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import NavLink from './NavLink';

const Navigation: React.FC = () => {
  return (
    <Flex
      w='100vw'
      h='72px'
      bgColor='Brand.Gunmetal'
      justifyContent='space-between'
      alignItems='center'
      px='6rem'
      pos='relative'
      dropShadow='10px -10px 10px #293241'
      zIndex={5}
    >
      {/* <Box
        pos='absolute'
        h='100vh'
        w='1px'
        bgColor='Brand.Cyan'
        left='50%'
        top='0%'
      />
      <Box
        pos='absolute'
        w='100vw'
        h='1px'
        bgColor='Brand.Cyan'
        left='0%'
        top='50%'
      /> */}
      <Box>
        <NavLink
          text='C.J. Fritz'
          fontSize='32'
          // letterSpacing='1px'
        />
      </Box>
      <Flex gap='3rem' justifyContent='flex-end'>
        <NavLink text='Home' />
        <NavLink text='About' />
        <NavLink text='Blog' />
        <NavLink text='Demos' />
        <NavLink text='Contact' />
      </Flex>
    </Flex>
  );
};

export default Navigation;
