import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    // TODO: Default component themes go here
  },
  colors: {
    Brand: {
      Maastricht: '#011627',
      Powder: '#FDFFFC',
      Aqua: '#2EC4B6',
      Crimson: '#E71D36',
      Dahlia: '#FF9F1C'
    }
  }
});

export default theme;
