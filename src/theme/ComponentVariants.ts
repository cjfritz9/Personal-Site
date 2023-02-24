import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const contentHeading = defineStyle({
  userSelect: 'none',
  w: '100%',
  mt: '3rem',
  pb: '6rem',
  color: 'Brand.MetalBlue',
  fontSize: ['3rem', '3.5rem', '3.75rem'],
  fontFamily: 'Poppins',
  textAlign: ['center', 'center', 'left'],
  textShadow: '0 0 10px #FFFFFF25'
});

export const headingTheme = defineStyleConfig({
  variants: { contentHeading }
});

const baseStyle = {
  display: 'flex',
  flexDir: 'column',
  minW: '100dvw',
  m: '0',
  pt: '3rem',
  px: ['1rem', '2rem', '3rem', '6rem'],
  pb: '5rem'
};

export const mainContainer = defineStyleConfig({ baseStyle })
