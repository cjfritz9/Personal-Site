import React, { useEffect, useState } from 'react';
import {
  Box,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import { ProductProps } from '../models/Props';
import NavLink from './NavLink';

const Work: React.FC<ProductProps> = ({
  title,
  description,
  deployment,
  repo,
  releaseDate
}) => {
  return (
    <Flex mb='5rem' mr={['0rem', '2rem', '2rem', '3rem', '5rem']}>
      <Stack>
        <Heading
          mb='-1rem'
          userSelect='none'
          fontFamily='Inter'
          color='Brand.PaleBlue'
          size='xl'
          textShadow='0 0 10px #FFFFFF25'
          textAlign='left'
        >
          {title}
        </Heading>
        <Flex gap='.5rem'>
          <Text size='lg' color='Brand.Sienna' fontFamily='Poppins'>
            V1 Release:
          </Text>
          <Text size='lg' color='Brand.Cyan' fontFamily='Poppins'>
            {releaseDate}
          </Text>
        </Flex>
        <Divider borderColor='brand.Charcoal' />
        <Flex justify='space-between'>
          <NavLink text='Deployment' altLink={deployment} isExternal={true} />
          <NavLink text='Repository' altLink={repo} isExternal={true} />
        </Flex>
        <Divider borderColor='brand.Charcoal' />
        <Stack pt='1rem'>
          <Text size='lg' color='Brand.Cyan' fontFamily='Poppins'>
            {description}
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Work;
