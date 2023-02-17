import { Box, Heading, Image, Stack } from '@chakra-ui/react';
import { HeroProps } from '../models/Props';

const Hero: React.FC<HeroProps> = ({ imageLink, heading }) => {
  console.log(imageLink);

  return (
    <Stack pos='relative' w='100vw'>
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
        src={imageLink}
        objectFit='cover'
        objectPosition='top center'
        filter='brightness(.40)'
        maxH={['160px', '160px', '480px']}
        zIndex={1}
      />
      <Heading
        pos='absolute'
        userSelect='none'
        top='14%'
        left='44%'
        color='Brand.PaleBlue'
        fontSize='72px'
        textShadow='0px 72px 7px #98C1D950'
        textAlign='center'
        zIndex={3}
      >
        {heading}
      </Heading>
    </Stack>
  );
};

export default Hero;
