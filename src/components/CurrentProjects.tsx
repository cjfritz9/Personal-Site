import React from 'react';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import Project from './Project';
import Projects from '../db/Projects';

const CurrentProjects: React.FC = () => {
  return (
    <Container>
      <Heading
        variant='contentHeading'
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
    </Container>
  );
};

export default CurrentProjects;
