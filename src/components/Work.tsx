import React from 'react';
import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { ProductProps } from '../models/Props';
import NavLink from './NavLink';

const Work: React.FC<ProductProps> = ({
  title,
  description,
  deployment,
  repo,
  demo,
  releaseDate
}) => {
  return (
    <Flex mb='2rem'>
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
        <Text size='lg' color='Brand.Sienna' fontFamily='Poppins'>
          V1 Release: {releaseDate}
        </Text>
        <Divider borderColor='brand.Charcoal' />
        <Flex justify='space-between'>
          <NavLink text='Deployment' altLink={deployment} isExternal={true} />
          <NavLink text='Repository' altLink={repo} isExternal={true} />
          <NavLink text='Video' altLink={demo} isExternal={true} />
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
