import React from 'react'
import { Box }  from '@chakra-ui/react'
import Hero from '../Hero';
import MyWork from '../MyWork';

const Demos: React.FC = () => {
return (
<Box>
    <Hero heading='DEMOS' />
    <MyWork />
</Box>
);
}

export default Demos;