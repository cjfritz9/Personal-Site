import React from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import Project from './Project';
import Projects from '../db/Projects';

const CurrentProjects: React.FC = () => {
  return (
    <Box>
      <Heading
        userSelect='none'
        ml='6rem'
        pt='3rem'
        pb='6rem'
        fontFamily='Poppins'
        color='Brand.MetalBlue'
        size='4xl'
        textAlign='left'
        w='fit-content'
        textShadow='0 0 10px #FFFFFF25'
      >
        CURRENT PROJECTS
      </Heading>
      <Grid
        templateColumns={[
          'repeat(1, 3fr)',
          'repeat(1, 3fr)',
          'repeat(2, 2fr)',
          'repeat(2, 2fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)'
        ]}
      >
        {Projects.map((project, i) => {
          return (
            <Project
              key={i}
              title={project.title}
              thumbnail={project.thumbnail}
              href={project.href}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default CurrentProjects;
