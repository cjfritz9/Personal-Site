import React, { useContext, useEffect, useState } from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { BlogPostProps } from '../models/Props';
import NavLink from './NavLink';
import { SiteContext } from '../context/SiteContext';
import { useNavigate } from 'react-router';
import { fetchArticleById } from '../api/MediumAPI';
import { ArticleResponseData } from '../models/API';

const BlogPost: React.FC<BlogPostProps> = ({ id }) => {
  const [blog, setBlog] = useState<ArticleResponseData | null>(null);
  const { setIsHovering } = useContext<any>(SiteContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticleById(id, setBlog);
  }, []);

  if (!blog) {
    return <Box />;
  }

  return (
    <Box px='3rem'>
      <Stack justifyContent='space-between'>
        <Heading
          userSelect='none'
          fontFamily='Inter'
          color='Brand.Cyan'
          size='lg'
          textAlign='left'
          textShadow='0 0 10px #FFFFFF25'
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => window.open(blog.url, '_blank')}
        >
          {blog.title}
        </Heading>
        <Flex mt='1.5rem !important'>
          <Image
            src={blog.image_url}
            _hover={{
              filter: 'brightness(.6)',
              boxShadow: '0 0 10px #E0FBFC',
              transition: 'filter .5s ease, box-shadow .25s ease'
            }}
            transition='filter .5s ease, box-shadow .5s ease'
            cursor='var(--cursorHover)'
            objectFit='cover'
            maxH='240px'
            mr='3rem'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => window.open(blog.url, '_blank')}
          />
          <Stack minW='160px' justifyContent={['space-between', 'flex-start']}>
            <Text
              userSelect='none'
              pt='1rem'
              pb='1rem'
              fontFamily='Poppins'
              color='Brand.PaleBlue'
              size='4xl'
              textShadow='0 0 10px #FFFFFF25'
              letterSpacing='wider'
            >
              {blog.subtitle}
            </Text>
            <Flex justifyContent='left'>
              <NavLink text='Read More' altLink={blog.url} isExternal={true} />
            </Flex>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default BlogPost;
