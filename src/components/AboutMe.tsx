import React from 'react';
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';

const AboutMe: React.FC = () => {
  return (
    <Grid templateColumns={['repeat(2, 1fr)']}>
      <Box>
        <Heading
          userSelect='none'
          ml='6rem'
          pt='3rem'
          pb='6rem'
          fontFamily='Poppins'
          color='Brand.MetalBlue'
          size='4xl'
          textAlign='left'
          w='fit-content'
          textShadow='0 0 10px #FFFFFF25'
        >
          ABOUT ME
        </Heading>
        <Text
          userSelect='none'
          mx='6rem'
          pb='1rem'
          fontFamily='Poppins'
          color='Brand.Cyan'
          size='xl'
          textAlign='left'
          w='fit-content'
          textShadow='0 0 10px #FFFFFF25'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          deserunt est libero, reprehenderit maiores ipsa modi excepturi ea
          sequi unde enim, veniam tempore? Omnis aut magnam necessitatibus
          aliquid quibusdam consequuntur.
        </Text>
        <Text
          userSelect='none'
          mx='6rem'
          pb='1rem'
          fontFamily='Poppins'
          color='Brand.Cyan'
          size='xl'
          textAlign='left'
          w='fit-content'
          textShadow='0 0 10px #FFFFFF25'
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          vero numquam officiis quos iste accusamus delectus dignissimos eius,
          minus commodi quae, quisquam, sit temporibus architecto deleniti ad?
          Obcaecati, maxime laborum. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Corrupti vero numquam officiis quos iste accusamus
          delectus dignissimos eius, minus commodi quae, quisquam, sit
          temporibus architecto deleniti ad? Obcaecati, maxime laborum.
        </Text>
        <Text
          userSelect='none'
          mx='6rem'
          pb='1rem'
          fontFamily='Poppins'
          color='Brand.Cyan'
          size='xl'
          textAlign='left'
          w='fit-content'
          textShadow='0 0 10px #FFFFFF25'
        >
          Corrupti vero numquam officiis quos iste accusamus delectus
          dignissimos eius, minus commodi quae, quisquam, sit temporibus
          architecto deleniti ad? Obcaecati, maxime laborum.
        </Text>
      </Box>
      <Box mx='6rem'>
        <Image
          src='https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg'
          alt='C.J. Fritz Head Shot'
          mixBlendMode='multiply'
        />
      </Box>
    </Grid>
  );
};

export default AboutMe;
