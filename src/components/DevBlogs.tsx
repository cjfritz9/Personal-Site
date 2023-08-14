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
  const [isLoading, setIsLoading] = useState(true);
  const [blogIds, setBlogIds] = useState<string[]>();

  useEffect(() => {
    fetchTopArticles(setBlogIds);
  }, []);

  useEffect(() => {
    if (blogIds && blogIds[0]) {
      setIsLoading(false);
    }
  }, [blogIds]);

  console.log(isLoading);
  return (
    <Container>
      <Heading variant='contentHeading'>DEV BLOGS</Heading>
      <Skeleton
        h='512px'
        w='100%'
        display={isLoading ? 'block' : 'none'}
        transition='all 1s ease'
      />
      <Grid
        minH='512px'
        templateColumns={[
          'repeat(1, 10fr)',
          'repeat(1, 10fr)',
          'repeat(2, 5fr)'
        ]}
      >
        {blogIds &&
          blogIds[0] &&
          blogIds.map((id: string, i: number) => {
            return <BlogPost key={i} id={id} />;
          })}
      </Grid>
    </Container>
  );
};

export default DevBlogs;
