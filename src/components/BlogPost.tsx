import React, { useContext } from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import { BlogPostProps } from '../models/Props';
import NavLink from './NavLink';
import { SiteContext } from '../context/SiteContext';
import { useNavigate } from 'react-router';

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  thumbnail,
  body,
  link
}) => {
  const { setIsHovering } = useContext<any>(SiteContext);
  const navigate = useNavigate();
  return (
    <Box px='3rem'>
      <Box></Box>
      <Flex>
        <Stack justifyContent='space-between'>
          <Heading
            userSelect='none'
            fontFamily='Inter'
            color='Brand.Cyan'
            size='xl'
            textAlign='center'
            textShadow='0 0 10px #FFFFFF25'
          >
            {title}
          </Heading>
          <Text
            userSelect='none'
            pt='1rem'
            pb='1rem'
            fontFamily='Poppins'
            color='Brand.PaleBlue'
            size='4xl'
            textAlign='justify'
            textShadow='0 0 10px #FFFFFF25'
            letterSpacing='wider'
          >
            {body}
          </Text>
          <Flex justifyContent='center'>
            <NavLink text='Read More' altLink={link} />
          </Flex>
        </Stack>
        <Image
          src={thumbnail}
          _hover={{
            filter: 'brightness(.6)',
            boxShadow: '0 0 10px #E0FBFC',
            transition: 'filter .5s ease, box-shadow .25s ease'
          }}
          transition='filter .5s ease, box-shadow .5s ease'
          cursor='var(--cursorHover)'
          objectFit='cover'
          w='50%'
          h='300px'
          ml='3rem'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => navigate(link)}
        />
      </Flex>
    </Box>
  );
};

export default BlogPost;
