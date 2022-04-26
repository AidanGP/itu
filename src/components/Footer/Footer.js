import React from 'react'
import { Box, Stack, Text, Image } from '@chakra-ui/react'

import NavIcons from '../NavIcons/NavIcons'

import Logo from '../../images/yellowlogo.webp'

function Footer() {
    return (
        <Box w='100%' p={12} bgGradient='linear(to-b, transparent, #00121f)'>
            <Stack spacing={8} p={10} direction={{ base: 'column', md: 'row' }} justifyContent='space-between' align='center'>
                <Text pl={2} display={{ base: 'none', md: 'block' }}>© 2022 ITU. All Rights Reserved</Text>
                <Image src={Logo} w={32} />

                <NavIcons fontSize={24} mx={4} />
                <Text align='center' pl={2} display={{ base: 'block', md: 'none' }}>© 2022 ITU. All Rights Reserved</Text>
            </Stack>
        </Box>
    )
}

export default Footer