import { Box, Divider, Flex, Link, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { SiteContext } from '../context/SiteContext';
import NavLink from './NavLink';

const Navigation: React.FC = () => {
  const [isHovered, setIsHovered] = useState({
    navBar: false,
    homeLink: false
  });
  const [showNav, setShowNav] = useState(false);

  const handleHoverChange = (mouseActivity: string) => {
    if (mouseActivity === 'enter-nav') {
      setIsHovered((prev) => ({
        ...prev,
        navBar: true
      }));
      setShowNav(true);
    } else if (mouseActivity === 'leave-nav') {
      setIsHovered((prev) => ({
        ...prev,
        navBar: false
      }));
      setShowNav(false);
    } else if (mouseActivity === 'enter-home') {
      setIsHovered((prev) => ({
        ...prev,
        homeLink: true
      }));
      setShowNav(true);
    } else {
      setIsHovered((prev) => ({
        ...prev,
        homeLink: false
      }));
    }
  };

  return (
    <Flex
      pos={showNav ? 'fixed' : 'absolute'}
      top={showNav ? '0px' : '-72px'}
      w='100%'
      maxW='100vw'
      h='72px'
      bgColor='Brand.Gunmetal'
      justifyContent='flex-end'
      alignItems='center'
      px='6rem'
      // pos='relative'
      dropShadow='10px -10px 10px #293241'
      zIndex={5}
      onMouseEnter={() => handleHoverChange('enter-nav')}
      onMouseLeave={() => handleHoverChange('leave-nav')}
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
      <Box
        pos='fixed'
        top='12px'
        left='5vw'
        onMouseEnter={() => handleHoverChange('enter-home')}
        onMouseLeave={() => handleHoverChange('leave-home')}
        zIndex={15}
      >
        <NavLink
          text={isHovered.homeLink ? '< Home />' : '</>'}
          altLink='/'
          fontSize='32'
          // letterSpacing='1px'
        />
      </Box>
      <Flex gap='3rem' justifyContent='flex-end'>
        <NavLink text='About' />
        <NavLink text='Blog' />
        <NavLink text='Demos' />
        <NavLink text='Contact' />
      </Flex>
    </Flex>
  );
};

export default Navigation;
