import React, { useEffect, useState } from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import { fetchTopArticles } from '../api/MediumAPI';
import BlogPost from './BlogPost';

const DevBlogs: React.FC = () => {
  const [blogIds, setBlogIds] = useState<string[]>();
  useEffect(() => {
    fetchTopArticles(setBlogIds);
  }, []);

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
        {blogIds &&
          blogIds.map((id: string, i: number) => {
            return <BlogPost key={i} id={id} />;
          })}
      </Grid>
    </Box>
  );
};

export default DevBlogs;
