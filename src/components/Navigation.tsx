import {
  Box,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  useMediaQuery
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MdMenu, MdMenuOpen } from 'react-icons/md';
import { useNavigate } from 'react-router';
import NavLink from './NavLink';

const Navigation: React.FC = () => {
  const [isHovered, setIsHovered] = useState({
    navBar: false,
    homeLink: false
  });
  const [touchPosition, setTouchPosition] = useState({ start: 0, end: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isLessThan768] = useMediaQuery(['(max-width: 768px)']);
  const navigate = useNavigate();

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

  const touchStartHandler = (start: TouchEvent) => {
    let _start = start.changedTouches[0].clientY;
    setTouchPosition((prev) => ({
      ...prev,
      start: _start
    }));
  };

  const touchEndHandler = (end: TouchEvent) => {
    let _end = end.changedTouches[0].clientY;

    setTouchPosition((prev) => ({
      ...prev,
      end: _end
    }));
  };

  useEffect(() => {
    setIsMenuOpen(false)
  }, [navigate])

  useEffect(() => {
    if (isLessThan768) {
      document.addEventListener('touchstart', (e) => touchStartHandler(e));
      document.addEventListener('touchend', (e) => touchEndHandler(e));
    } else {
      document.removeEventListener('touchstart', (e) => touchStartHandler(e));
      document.removeEventListener('touchend', (e) => touchEndHandler(e));
    }
  }, [isLessThan768]);

  useEffect(() => {
    if (touchPosition.start && touchPosition.end) {
      if (touchPosition.start > touchPosition.end) {
        setShowNav(false);
        // testing
        // setIsMenuOpen(false);
      } else {
        setShowNav(true);
      }
    }
  }, [{ ...touchPosition }]);

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
      px='1.5rem'
      // pos='relative'
      boxShadow='0px 2px 10px #00000050'
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
        pos={isLessThan768 ? 'absolute' : 'fixed'}
        top={isLessThan768 ? '16px' : '12px'}
        left='24px'
        onMouseEnter={() => handleHoverChange('enter-home')}
        onMouseLeave={() => handleHoverChange('leave-home')}
        zIndex={15}
      >
        <NavLink
          text={isHovered.homeLink || isLessThan768 ? '< Home >' : '</>'}
          altLink='/'
          fontSize={isLessThan768 ? '24' : '32'}
          // letterSpacing='1px'
        />
      </Box>
      {isLessThan768 ? (
        <Flex>
          <Menu isOpen={isMenuOpen} offset={[168, 8]} isLazy closeOnBlur>
            <MenuButton onClick={() => setIsMenuOpen((prev) => !prev)}>
              <Icon
                mt='.5rem'
                color='Brand.Cyan'
                fontSize='32px'
                as={isMenuOpen ? MdMenuOpen : MdMenu}
              />
            </MenuButton>
            <MenuList
              px='24px'
              w={['100dvw', 'fit-content']}
              mt='5px'
              bgColor='Brand.Gunmetal'
              borderRadius='0'
              border='none'
              borderTop='1px solid'
              borderColor='Brand.Charcoal'
              color='Brand.Cyan'
            >
              <Flex h='fit-content' w='100%' gap={['','2rem']} justify='space-between'>

              {/* <Stack alignItems='flex-end'> */}
              <NavLink text='About' fontSize='14' />
              <NavLink text='Blog' fontSize='14' />
              <NavLink text='Demos' fontSize='14' />
              <NavLink text='Contact' fontSize='14' />
              {/* </Stack> */}
              </Flex>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <Flex gap={['1rem', '2rem', '3rem']} justifyContent='flex-end'>
          <NavLink text='About' />
          <NavLink text='Blog' />
          <NavLink text='Demos' />
          <NavLink text='Contact' />
        </Flex>
      )}
    </Flex>
  );
};

export default Navigation;
