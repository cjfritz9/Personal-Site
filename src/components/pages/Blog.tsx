import React from 'react'
import { Box } from '@chakra-ui/react'
import Hero from '../Hero';
import DevBlogs from '../DevBlogs';


const Blog: React.FC = () => {
return (
  <Box>
    <Hero heading='BLOG'/>
    <DevBlogs />
</Box>
);
}

export default Blog;