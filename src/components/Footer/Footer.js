import React from 'react'
import { Box, Stack, Text, Image } from '@chakra-ui/react'

import NavIcons from '../NavIcons/NavIcons'

import Logo from '../../images/yellowlogo.webp'

function Footer() {
    return (
        <Box w='100%' p={4} bgGradient='linear(to-b, transparent, #00121f)'>
            <Stack spacing={8} p={10} direction={{ base: 'column', lg: 'row' }} justifyContent='space-between' align='center'>
                <Text pl={2} display={{ base: 'none', md: 'block' }}>© 2022 ITU. All Rights Reserved</Text>
                <Image src={Logo} w={36} pl={{ base: 0, lg: 12 }} />

                <NavIcons fontSize={24} mx={4} />
                <Text align='center' pl={2} display={{ base: 'block', md: 'none' }}>© 2022 ITU. All Rights Reserved</Text>
            </Stack>
        </Box>
    )
}

export default Footer