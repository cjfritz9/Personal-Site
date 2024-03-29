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
  // const [touchPosition, setTouchPosition] = useState({ start: 0, end: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isLessThan768] = useMediaQuery(['(max-width: 768px)']);
  const navigate = useNavigate();

  const handleHoverChange = (mouseActivity: string) => {
    if (mouseActivity === 'enter-home') {
      setIsHovered((prev) => ({
        ...prev,
        homeLink: true
      }));
    } else {
      setIsHovered((prev) => ({
        ...prev,
        homeLink: false
      }));
    }
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [navigate]);

  const updater = () => {
    if (window.scrollY < 480) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updater);
  }, []);

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
      boxShadow='0px 2px 10px #00000050'
      zIndex={5}
    >
      <Box
        pos={showNav ? 'fixed' : 'absolute'}
        top={showNav ? '16px' : '12px'}
        left='24px'
        onMouseEnter={() => handleHoverChange('enter-home')}
        onMouseLeave={() => handleHoverChange('leave-home')}
        zIndex={15}
      >
        <NavLink
          text={isHovered.homeLink || isLessThan768 ? '< Home >' : '</>'}
          altLink='/'
          fontSize={isLessThan768 ? '24' : '32'}
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
              <Flex
                h='fit-content'
                w='100%'
                gap={['', '2rem']}
                justify='space-between'
              >
                {/* <Stack alignItems='flex-end'> */}
                <NavLink text='About' fontSize='14' />
                <NavLink text='Blog' fontSize='14' />
                <NavLink text='Portfolio' fontSize='14' />
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
          <NavLink text='Portfolio' />
          <NavLink text='Contact' />
        </Flex>
      )}
    </Flex>
  );
};

export default Navigation;
