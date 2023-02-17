import React, { useState } from 'react';
import { Box, Button, Heading, Image, Icon, Text } from '@chakra-ui/react';
import { ProjectProps } from '../models/Props';
import { ImArrowUpRight } from 'react-icons/im';

const Project: React.FC<ProjectProps> = ({ title, thumbnail, href }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigate = (href: string) => {
    window.open(href, '_blank');
  };

  return (
    <Box
      mx='6rem'
      py='3rem'
      onClick={() => handleNavigate(href)}
    >
      <Heading
        _hover={{
          color: 'Brand.PaleBlue',
          transition: 'color .5s ease'
        }}
        userSelect='none'
        cursor='pointer'
        color='Brand.Cyan'
        fontFamily='Inter'
        mb='1rem'
      >
        {title}
      </Heading>
      <Box
        cursor='pointer'
        pos='relative'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          filter={isHovered ? 'brightness(.5)' : 'brightness(1)'}
          transition='filter .3s ease'
          src={thumbnail}
          h='250px'
          borderRadius='10px'
        />
        {isHovered && (
          <Text
            pos='absolute'
            top='40%'
            left='45%'
            m='1rem'
            dropShadow='3px 3px 10px #E0FBFC'
            fontSize='2xl'
            fontWeight='bold'
            fontFamily='Marcellus'
            color='Brand.Cyan'
          >GO</Text>
        )}
      </Box>
    </Box>
  );
};

export default Project;
