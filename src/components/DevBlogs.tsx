import React, { useEffect, useState } from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import BlogPost from './BlogPost';
import { fetchTopArticles } from '../api/MediumAPI';

const DevBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<any>();
  useEffect(() => {
    fetchTopArticles(setBlogs);
  }, []);

  console.log(blogs);

  if (!blogs || !blogs[0]) {
    return <Box />
  }

  return (
    <Box>
      <Heading
        ml='6rem'
        userSelect='none'
        pt='3rem'
        pb='6rem'
        fontFamily='Poppins'
        color='Brand.MetalBlue'
        size='4xl'
        textAlign='left'
        w='fit-content'
        textShadow='0 0 10px #FFFFFF25'
      >
        DEV BLOGS
      </Heading>
      <Grid mx='3rem' mb='3rem' templateColumns={['repeat(2, 5fr)']}>
        {blogs &&
          blogs.map((blog: any, i: number) => {
            return <BlogPost key={i} id={blog} />;
          })}
      </Grid>
    </Box>
  );
};

export default DevBlogs;
