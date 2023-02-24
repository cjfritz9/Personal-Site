import React from 'react';
import { Box, Grid, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import NavLink from './NavLink';

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
          color='Brand.PaleBlue'
          size='xl'
          textAlign='left'
          w='fit-content'
          textShadow='0 0 10px #FFFFFF25'
        >
          Hi there! My name is C.J. Fritz and I am a web developer based in
          Denver, Colorado. I am 29 years old and my passion for coding began
          just over six months ago when I wrote my first line of JavaScript on
          August 4th, 2022.
        </Text>
        <Text
          userSelect='none'
          mx='6rem'
          pb='1rem'
          fontFamily='Poppins'
          color='Brand.PaleBlue'
          size='xl'
          textAlign='left'
          w='fit-content'
          textShadow='0 0 10px #FFFFFF25'
        >
          Since then, I have completed Fullstack Academy's Web Developer
          Bootcamp in October of 2022 and have also completed 6 Udemy courses
          with over 145 hours of lecture. These courses cover a wide range of
          topics, including TypeScript, Google Cloud Platform, Unreal Engine 5
          and C++, and Shopify.
        </Text>
        <Text
          userSelect='none'
          mx='6rem'
          pb='1rem'
          fontFamily='Poppins'
          color='Brand.PaleBlue'
          size='xl'
          textAlign='left'
          w='fit-content'
          textShadow='0 0 10px #FFFFFF25'
        >
          In addition to the technologies I have learned through courses and
          projects, I also utilize various tools to streamline my productivity.
          Currently, my go-to technologies include TypeScript, React, Chakra UI
          + FigPilot, Framer+Motion, command-line tools such as Git and GitHub
          CLI, and AI assistance.
          <NavLink
            text='Read More'
            isExternal={true}
            altLink='https://medium.com/@dev.cjfritz/developing-astra-skincare-a-streamlined-process-with-chakra-ui-shopify-and-chatgpt-f4e5f25db72d'
          />
        </Text>
        <Text
          userSelect='none'
          mx='6rem'
          pb='1rem'
          fontFamily='Poppins'
          color='Brand.PaleBlue'
          size='xl'
          textAlign='left'
          w='fit-content'
          textShadow='0 0 10px #FFFFFF25'
        >
          I have also been very active on
          <NavLink
            text='GitHub'
            isExternal={true}
            altLink='https://www.github.com/cjfritz9'
          />
          , with over 1,300 contributions and 36 repositories to my name. I have
          worked on a variety of projects, from game plugins to full-stack web
          applications, including a
          <NavLink
            text='Facebook-clone for Developers'
            isExternal={true}
            altLink='https://github.com/Social-Stack/Social-Media-Stack'
          />
          that includes relevant post sorting algorithms, live messaging,
          notifications and more.
        </Text>
        <Text
          userSelect='none'
          mx='6rem'
          pb='1rem'
          fontFamily='Poppins'
          color='Brand.PaleBlue'
          size='xl'
          textAlign='left'
          w='fit-content'
          textShadow='0 0 10px #FFFFFF25'
        >
          My passion for problem-solving drives me to code nearly every day, and
          I love collaborating with others, especially designers and those with
          great ideas. I find that working with people who complement my skill
          set gives me a great sense of direction and excitement.
        </Text>
        <Text
          userSelect='none'
          mx='6rem'
          pb='1rem'
          fontFamily='Poppins'
          color='Brand.PaleBlue'
          size='xl'
          textAlign='left'
          w='fit-content'
          textShadow='0 0 10px #FFFFFF25'
        >
          Thank you for taking the time to read a little bit about me. If you
          have any questions or would like to discuss potential collaborations,
          please don't hesitate to
          <NavLink text='get in touch!' altLink='/contact' />
        </Text>
      </Box>
      <Stack>
        <Image
          src='https://st3.depositphotos.com/9998432/13335/v/600/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg'
          alt='Photo of the developer'
          mixBlendMode='multiply'
        />
      </Stack>
    </Grid>
  );
};

export default AboutMe;
