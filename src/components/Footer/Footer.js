import React from 'react'
import { Box, Stack, Text, Image } from '@chakra-ui/react'

import NavIcons from '../NavIcons/NavIcons'

import Logo from '../../images/yellowlogo.webp'

function Footer() {
    return (
        <Box w='100%' p={4} bgGradient='linear(to-b, transparent, #00121f)'>
            <Stack spacing={8} p={10} direction={{ base: 'column', lg: 'row' }} justifyContent='space-between' align='center'>
                <Text pl={2} display={{ base: 'none', lg: 'block' }}>© 2022 ITU. All Rights Reserved</Text>
                <Image src={Logo} alt={'logo'} w={36} pl={{ base: 0, lg: 12 }} loading='lazy' draggable={false} />
                <Text align='center' pl={2} display={{ base: 'block', lg: 'none' }}>© 2022 ITU. All Rights Reserved</Text>
                <NavIcons fontSize={24} mx={4} />
            </Stack>
        </Box>
    )
}

export default Footer