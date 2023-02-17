import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    // TODO: Default component themes go here
    Link: {
      baseStyle: {
        _hover: {
          color: 'Brand.Sienna',
          borderBottom: '2px solid #FFFFFF25',
          textDecoration: 'none',
          transform: 'scale(1.05)',
          transition: 'transform .5s ease, color .5s ease'
        },
        borderBottom: '2px solid transparent',
        cursor: 'none',
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
