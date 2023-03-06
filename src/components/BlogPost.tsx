import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import { BlogPostProps } from '../models/Props';
import NavLink from './NavLink';
import { SiteContext } from '../context/SiteContext';
import { fetchArticleById } from '../api/MediumAPI';
import { ArticleResponseData } from '../models/API';

const BlogPost: React.FC<BlogPostProps> = ({ id }) => {
  const [blog, setBlog] = useState<ArticleResponseData | null>(null);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const { setIsHovering } = useContext<any>(SiteContext);
  const [isLessThan768] = useMediaQuery(['(max-width: 768px)']);

  const handleHover = (mouseEvent: 'enter' | 'leave') => {
    if (mouseEvent === 'enter') {
      setIsHovering(true);
      setIsImageHovered(true);
    } else {
      setIsHovering(false);
      setIsImageHovered(false);
    }
  };

  useEffect(() => {
    fetchArticleById(id, setBlog);
  }, []);

  return (
    <Skeleton
      minH='336px'
      w='100%'
      isLoaded={blog && blog.title ? true : false}
      fadeDuration={1.5}
    >
      <Box w='100%' pr={['0rem', '0rem', '2rem']} py='2rem'>
        {blog && (
          <Stack w='100%' justifyContent='space-between'>
            <Heading
              h='72px'
              userSelect='none'
              fontFamily='Inter'
              color='Brand.Cyan'
              fontSize={['18px', '22px', '24px', '24px', '24px', '28px']}
              textAlign={['center', 'left']}
              textShadow='0 0 10px #FFFFFF25'
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => window.open(blog.url, '_blank')}
            >
              {blog.title}
            </Heading>
            <Flex
              w='100%'
              pos='relative'
              overflow={['visible', 'hidden']}
              mt='1.5rem !important'
              onMouseEnter={() => handleHover('enter')}
              onMouseLeave={() => handleHover('leave')}
              onClick={() => window.open(blog.url, '_blank')}
            >
              <Image
                src={blog.image_url}
                filter={
                  isImageHovered || isLessThan768
                    ? 'brightness(.1)'
                    : 'brightness(1)'
                }
                boxShadow={
                  isImageHovered || isLessThan768 ? '0 0 10px #E0FBFC' : 'none'
                }
                transition='filter .5s ease, box-shadow .5s ease'
                cursor='var(--cursorHover)'
                objectFit='cover'
                w='100%'
                h='416px'
              />
              <Stack
                transform='auto'
                translateY={isImageHovered || isLessThan768 ? '-100%' : '0%'}
                transition='transform .5s ease'
                top='100%'
                px={['1rem', '2rem']}
                py={['1rem', '2rem']}
                pos='absolute'
                minW='160px'
                h='100%'
                justifyContent='flex-start'
              >
                <Text
                  userSelect='none'
                  pl='4px'
                  fontFamily='Poppins'
                  fontSize={['14px', '18px', '16px', '16px', '18px', '24px']}
                  color='Brand.PaleBlue'
                  textShadow='0 0 10px #FFFFFF25'
                >
                  {blog.subtitle}
                </Text>
                <Flex justifyContent={['center', 'left']}>
                  <NavLink
                    text='Read More'
                    altLink={blog.url}
                    isExternal={true}
                  />
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        )}
      </Box>
    </Skeleton>
  );
};

export default BlogPost;
