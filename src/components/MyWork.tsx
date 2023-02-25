import React from 'react';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import Products from '../db/Products';
import Work from './Work';

const MyWork: React.FC = () => {
  return (
    <Container>

      <Heading
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
        MY WORK
      </Heading>
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
