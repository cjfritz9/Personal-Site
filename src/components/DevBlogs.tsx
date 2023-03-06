import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Skeleton
} from '@chakra-ui/react';
import { fetchTopArticles } from '../api/MediumAPI';
import BlogPost from './BlogPost';

const DevBlogs: React.FC = () => {
  const [blogIds, setBlogIds] = useState<string[]>();

  useEffect(() => {
    fetchTopArticles(setBlogIds);
  }, []);

  return (
    <Container>
      <Heading
        variant='contentHeading'
      >
        DEV BLOGS
      </Heading>
      <Grid
        templateColumns={[
          'repeat(1, 10fr)',
          'repeat(1, 10fr)',
          'repeat(2, 5fr)'
        ]}
      >
        {/* <Skeleton
          h='100%'
          w='100%'
          isLoaded={blogIds && blogIds[0] ? true : false}
          fadeDuration={1}
        > */}
          {blogIds &&
            blogIds[0] &&
            blogIds.map((id: string, i: number) => {
              return <BlogPost key={i} id={id} />;
            })}
        {/* </Skeleton> */}
      </Grid>
    </Container>
  );
};

export default DevBlogs;
