import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import useMousePosition from '../utils/helpers';

const Cursor: React.FC<any> = () => {
  const mousePosition = useMousePosition();

  const { isHovering } = useContext<any>(SiteContext);

  return (
    <Box
      display={
        mousePosition.x && mousePosition.y && !isHovering ? 'block' : 'none'
      }
      pos='absolute'
      top={mousePosition.y - 6.5 + 'px'}
      left={mousePosition.x - 6.5 + 'px'}
      pointerEvents='none'
      bgColor='#FFFFFF15'
      filter='brightness(2.5)'
      boxShadow='0 0 10px white'
      mixBlendMode='plus-lighter'
      h='20px'
      w='20px'
      borderRadius='50%'
      zIndex='11'
    />
  );
};

export default Cursor;
