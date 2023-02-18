import { Box, Heading, Image, Stack } from '@chakra-ui/react';
import { HeroProps } from '../models/Props';

import heroImage from '../assets/hero_home.jpg';


const Hero: React.FC<HeroProps> = ({ heading }) => {
  return (
    <Stack pos='relative' maxW='100vw' mb='3rem' overflowX='hidden'>
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
        maxH={['160px', '160px', '480px']}
        maxW='100vw'
        zIndex={1}
      />
      <Heading
        pos='absolute'
        userSelect='none'
        top='14%'
        left='44%'
        color='Brand.Sienna'
        fontSize='72px'
        textAlign='center'
        zIndex={3}
        fontFamily='Poppins'
        textShadow='0 0 10px #FFFFFF25'
      >
        {heading}
      </Heading>
      <Heading
        pos='absolute'
        userSelect='none'
        transform='scale(1, -1)'
        top='30%'
        left='44%'
        color='#EE6C4D35'
        textShadow='0 -6px 0px #EE6C4D25, 0 0 40px #EE6C4D50'
        fontSize='72px'
        textAlign='center'
        zIndex={3}
        fontFamily='Poppins'
      >
        {heading}
      </Heading>
    </Stack>
  );
};

export default Hero;
