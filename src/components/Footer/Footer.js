import React from 'react'
import { Box, HStack, Text, Image } from '@chakra-ui/react'

import NavIcons from '../NavIcons/NavIcons'

import Logo from '../../images/yellowlogo.png'

function Footer() {
    return (
        <Box w='100%' p={12} bgGradient='linear(to-b, transparent, #00121f)'>
            <HStack spacing={8} p={10} justifyContent='space-between'>
                <Text pl={2}>© 2022 ITU. All Rights Reserved</Text>
                <Image src={Logo} w={32} />

                <NavIcons fontSize={24} w={20} />

            </HStack>

        </Box>
    )
}

export default Footer