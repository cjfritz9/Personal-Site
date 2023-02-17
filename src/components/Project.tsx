import React, { useContext, useEffect, useState } from 'react';
import { Box, Heading, Image, Text, useConst } from '@chakra-ui/react';
import { ProjectProps } from '../models/Props';
import { SiteContext } from '../context/SiteContext';

const Project: React.FC<ProjectProps> = ({ title, thumbnail, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { setIsHovering } = useContext<any>(SiteContext);

  const handleNavigate = (href: string) => {
    window.open(href, '_blank');
  };

  const handleHover = (toggle: boolean) => {
    setIsHovering(toggle);
    setIsHovered(toggle);
  }

  return (
    <Box mx='6rem' py='3rem' onClick={() => handleNavigate(href)}>
      <Heading
        _hover={{
          color: 'Brand.PaleBlue',
          textShadow: '0 0 10px #FFFFFF50',
          transition: 'color .5s ease, text-shadow .25s ease'
        }}
        w='fit-content'
        userSelect='none'
        color='Brand.Cyan'
        fontFamily='Inter'
        mb='1rem'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {title}
      </Heading>
      <Box
        cursor='var(--cursorHover)'
        pos='relative'
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <Image
          filter={isHovered ? 'brightness(.6)' : 'brightness(1)'}
          boxShadow={isHovered ? '0 0 10px #E0FBFC' : 'none'}
          transition='filter .25s ease, box-shadow .25s ease'
          src={thumbnail}
          h='250px'
          borderRadius='10px'
        />
        {isHovered && (
          <Text
            pos='absolute'
            top='40%'
            left='43%'
            m='1rem'
            dropShadow='3px 3px 10px #E0FBFC'
            fontSize='2xl'
            fontWeight='bold'
            fontFamily='Marcellus'
            color='Brand.Cyan'
          >
            GO
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default Project;
