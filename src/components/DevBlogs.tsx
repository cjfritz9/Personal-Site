import React, { useEffect, useState } from 'react';
import { Box, Flex, Grid, Heading, Skeleton } from '@chakra-ui/react';
import { fetchTopArticles } from '../api/MediumAPI';
import BlogPost from './BlogPost';

const DevBlogs: React.FC = () => {
  const [blogIds, setBlogIds] = useState<string[]>();

  useEffect(() => {
    fetchTopArticles(setBlogIds);
  }, []);

  return (
    <Box mb='6.5rem !important'>
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
      <Grid mx='6rem' templateColumns={['repeat(2, 5fr)']}>
        <Skeleton
          h='100%'
          w='100%'
          isLoaded={blogIds && blogIds[0] ? true : false}
          fadeDuration={1}
        >
          {blogIds &&
            blogIds[0] &&
            blogIds.map((id: string, i: number) => {
              return <BlogPost key={i} id={id} />;
            })}
        </Skeleton>
      </Grid>
    </Box>
  );
};

export default DevBlogs;
