import React from 'react';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import Products from '../db/Products';
import Work from './Work';

const MyWork: React.FC = () => {
  return (
    <Container>
      <Heading variant='contentHeading'>MY WORK</Heading>
      <Grid
        templateColumns={[
          'repeat(1, 6fr)',
          'repeat(2, 3fr)',
          'repeat(2, 3fr)',
          'repeat(3, 2fr)'
        ]}
      >
        {Products.map((product, i) => {
          return (
            <Work
              key={i}
              title={product.title}
              description={product.description}
              deployment={product.deployment}
              repo={product.repo}
              demo={product.demo}
              releaseDate={product.releaseDate}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default MyWork;
