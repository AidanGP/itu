import React from 'react';
import './styles.css'
import { Box } from '@chakra-ui/react';

function TeamCarousel() {
    return (
        <Box overflowX={'hidden'}>
            <Box className='sliding'></Box>
        </Box>
    )
}

export default TeamCarousel