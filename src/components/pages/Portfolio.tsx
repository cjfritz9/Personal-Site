import React from 'react'
import { Box }  from '@chakra-ui/react'
import Hero from '../Hero';
import MyWork from '../MyWork';

const Portfolio: React.FC = () => {
return (
<Box>
    <Hero heading='PORTFOLIO' />
    <MyWork />
</Box>
);
}

export default Portfolio;