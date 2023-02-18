import React from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import Blogs from '../db/Blogs';
import BlogPost from './BlogPost';

const DevBlogs: React.FC = () => {
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
      <Grid mx='3rem' mb='3rem' templateColumns={['repeat(2, 2fr)']}>
        {Blogs.map((blog, i) => {
          return (
            <BlogPost
              key={i}
              title={blog.title}
              body={blog.body}
              thumbnail={blog.thumbnail}
              link={blog.link}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default DevBlogs;
