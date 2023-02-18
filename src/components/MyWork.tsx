import React from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import Products from '../db/Products';
import Work from './Work';

const MyWork: React.FC = () => {
  return (
    <Box mx='6rem'>
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
      <Grid templateColumns={['repeat(3, 2fr)']}>
        {Products.map((product) => {
          return (
            <Work
              title={product.title}
              description={product.description}
              deployment={product.deployment}
              repo={product.repo}
              demo={product.demo}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default MyWork;
