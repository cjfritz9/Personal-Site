import React from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import NavLink from './NavLink';

const AboutMe: React.FC = () => {
  return (
    <Container>
      <Heading variant='contentHeading'>ABOUT ME</Heading>
      <Flex direction={['column-reverse', 'column-reverse', 'row']} gap='3rem'>
        <Box w='100%'>
          <Stack w='100%'>
            <Text
              userSelect='none'
              pb='1rem'
              fontFamily='Poppins'
              color='Brand.PaleBlue'
              size='xl'
              textAlign='left'
              textShadow='0 0 10px #FFFFFF25'
            >
              Hi there! My name is C.J. Fritz and I am a web developer based in
              Denver, Colorado. I am 29 years old and my passion for coding
              began when I was very young playing games on the family computer.
              It wasn't until my late 20's that I was able to pursue this
              passion when I took an online web development course.
            </Text>
            <Text
              userSelect='none'
              pb='1rem'
              fontFamily='Poppins'
              color='Brand.PaleBlue'
              size='xl'
              textAlign='left'
              textShadow='0 0 10px #FFFFFF25'
            >
              Since then, I attended and graduated Fullstack Academy's Web
              Developer Bootcamp in 2022 and I have done nothing but create
              websites and software in my free time. I have also completed 6
              Udemy courses with over 145 hours of lecture. These courses cover
              a wide range of topics, including TypeScript, Google Cloud
              Platform, Unreal Engine 5/C++, and Shopify.
            </Text>
            <Text
              userSelect='none'
              pb='1rem'
              fontFamily='Poppins'
              color='Brand.PaleBlue'
              size='xl'
              textAlign='left'
              textShadow='0 0 10px #FFFFFF25'
            >
              In addition to the technologies I have learned through courses and
              projects, I also utilize various tools to streamline my
              productivity. Currently, my go-to technologies include TypeScript,
              React, Chakra UI + FigPilot, Framer+Motion, command-line tools
              such as Git and GitHub CLI, and AI assistance.
              <NavLink
                text='Read More'
                isExternal={true}
                altLink='https://medium.com/@dev.cjfritz/developing-astra-skincare-a-streamlined-process-with-chakra-ui-shopify-and-chatgpt-f4e5f25db72d'
              />
            </Text>
            <Text
              userSelect='none'
              pb='1rem'
              fontFamily='Poppins'
              color='Brand.PaleBlue'
              size='xl'
              textAlign='left'
              textShadow='0 0 10px #FFFFFF25'
            >
              I have also been very active on
              <NavLink
                text='GitHub'
                isExternal={true}
                altLink='https://www.github.com/cjfritz9'
              />
              , with over 1,300 contributions and 36 repositories to my name. I
              have worked on a variety of projects, from game plugins to
              full-stack web applications, including a
              <NavLink
                text='Facebook clone for developers'
                isExternal={true}
                altLink='https://github.com/Social-Stack/Social-Media-Stack'
              />
              that includes relevant post sorting algorithms, live messaging,
              notifications and more.
            </Text>
            <Text
              userSelect='none'
              pb='1rem'
              fontFamily='Poppins'
              color='Brand.PaleBlue'
              size='xl'
              textAlign='left'
              textShadow='0 0 10px #FFFFFF25'
            >
              My passion for problem-solving drives me to code nearly every day,
              and I love collaborating with others, especially designers and
              those with great ideas. I find that working with people that
              complement my skill set gives me a great sense of direction and
              excitement.
            </Text>
            <Text
              userSelect='none'
              pb='1rem'
              fontFamily='Poppins'
              color='Brand.PaleBlue'
              size='xl'
              textAlign='left'
              textShadow='0 0 10px #FFFFFF25'
            >
              Thank you for taking the time to read a little bit about me. If
              you have any questions or would like to discuss potential
              collaborations, please don't hesitate to
              <NavLink text='get in touch!' altLink='/contact' />
            </Text>
          </Stack>
        </Box>
        <Stack w='100%' maxH='600px' justify='flex-end'>
          <Image
            src='https://i.ibb.co/3S2ywHC/received-893397865297921.jpg'
            alt='Photo of the C.J.'
            h='100%'
            objectFit='contain'
          />
        </Stack>
      </Flex>
    </Container>
  );
};

export default AboutMe;
