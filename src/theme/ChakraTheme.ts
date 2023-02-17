import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    // TODO: Default component themes go here
    Link: {
      baseStyle: {
        _hover: {
          color: 'Brand.Sienna',
          textShadow: '0 0 10px #FFFFFF40',
          textDecoration: 'none',
          transform: 'scale(1.05)',
          // bgColor: '#FFFFFF20',
          transition: 'transform .25s ease, color .25s ease, text-shadow .25s ease, background .25s ease'
        },
        paddingX: '6px',
        paddingY: '3px',
        borderRadius: '10px',
        cursor: 'var(--cursorHover)',
        color: 'Brand.Cyan',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        textShadow: '0px 0px 5px #2C2C2C',
        userSelect: 'none'
      }
    }
  },
  colors: {
    Brand: {
      Charcoal: '#2C2C2C',
      MetalBlue: '#3D5A80',
      PaleBlue: '#98C1D9',
      Cyan: '#E0FBFC',
      Sienna: '#EE6C4D',
      Gunmetal: '#293241'
    }
  }
});

export default theme;
