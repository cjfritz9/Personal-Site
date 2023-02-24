import { Box, Heading, Image, Stack } from '@chakra-ui/react';
import { HeroProps } from '../models/Props';

import heroImage from '../assets/hero_home.jpg';

const Hero: React.FC<HeroProps> = ({ heading }) => {
  return (
    <Stack pos='relative' maxW='100vw' mb='3rem' overflow='hidden'>
      <Box
        top='0%'
        pos='absolute'
        w='100vw'
        maxH={['160px', '160px', '480px']}
        h={['160px', '160px', '480px']}
        bg='linear-gradient(0deg, #293241 0%, #00000000 50%)'
        zIndex={2}
      />
      <Image
        userSelect='none'
        mt='0px !important'
        src={heroImage}
        objectFit='cover'
        objectPosition='top center'
        filter='brightness(.40)'
        maxH={['160px', '160px', '320px', '480px']}
        maxW='100vw'
        zIndex={1}
      />
      <Stack w='100%' justify='center'>
        <Heading
          w='100%'
          pos='absolute'
          userSelect='none'
          top={['6dvh','9dvh','1dvh', '4dvh', '6dvh', '12dvh']}
          color='Brand.Sienna'
          fontSize={['40px', '48px', '72px']}
          textAlign='center'
          zIndex={3}
          fontFamily='Poppins'
          textShadow='0 0 10px #FFFFFF25'
        >
          {heading}
        </Heading>
        <Heading
          display={['none', 'none', 'block']}
          w='100%'
          pos='absolute'
          userSelect='none'
          transform='scale(1, -1)'
          top={['','','10dvh', '13dvh', '15dvh', '24dvh']}
          color='#EE6C4D35'
          textShadow='0 -6px 0px #EE6C4D25, 0 0 40px #EE6C4D50'
          fontSize={['40px', '48px', '72px']}
          textAlign='center'
          zIndex={3}
          fontFamily='Poppins'
        >
          {heading}
        </Heading>
      </Stack>
    </Stack>
  );
};

export default Hero;
