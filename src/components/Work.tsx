import React from 'react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ProductProps } from '../models/Props';
import NavLink from './NavLink';

const Work: React.FC<ProductProps> = ({ title, description, deployment, repo, demo }) => {
  return (
    <Box>
      <Heading
        mb='1rem'
        userSelect='none'
        fontFamily='Inter'
        color='Brand.PaleBlue'
        size='xl'
        textShadow='0 0 10px #FFFFFF25'
        textAlign='center'
      >
        {title}
      </Heading>
      <Flex justifyContent='space-between' mb='2rem'>
        <Text w='70%' size='lg' color='Brand.Cyan' fontFamily='Poppins'>{description}</Text>
      <Stack>
        <NavLink text='Deployment' altLink={deployment} />
        <NavLink text='Repository' altLink={repo} />
        <NavLink text='Demonstration' altLink={demo} />
      </Stack>
      </Flex>
    </Box>
  );
};

export default Work;
