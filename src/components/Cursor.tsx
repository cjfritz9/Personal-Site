import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import useMousePosition from '../hooks/UseMousePosition';

const Cursor: React.FC<any> = () => {
  const mousePosition = useMousePosition();

  const { isHovering } = useContext<any>(SiteContext);

  return (
    <Box
      display={
        mousePosition.x > 5 && mousePosition.y > 5 && !isHovering
          ? 'block'
          : 'none'
      }
      pos='absolute'
      top={mousePosition.y - 78.5 + 'px'}
      left={mousePosition.x - 6.5 + 'px'}
      pointerEvents='none'
      bgColor='#FFFFFF35'
      boxShadow='0 0 15px #E0FBFC50'
      mixBlendMode='hard-light'
      h='20px'
      w='20px'
      borderRadius='50%'
      zIndex='11'
    />
  );
};

export default Cursor;
