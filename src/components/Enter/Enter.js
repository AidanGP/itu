import { Box, Image, VStack, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import AnimatedButton from '../AnimatedButton/AnimatedButton'
import NavIcons from '../NavIcons/NavIcons'

import Logo from '../../images/yellowlogo.webp'
import go from '../../images/go.png'
import title from '../../images/title.webp'

import bg from '../../images/bg_test.webp'

function Enter({ enter }) {
    return (
        <Box color='white'>
            <VStack bgImage={bg} bgPosition='center'>
                <Image pb={164} pt={4} src={Logo} w={32} />
                <Image src={go} />
                <Image src={title} />
                <AnimatedButton enter={enter} />
                <Text w={{ base: '80%', md: '60%', lg: '50%' }} py={32} align='center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo non nisi imperdiet tincidunt vel at dolor. Sed auctor tempor consectetur. Maecenas lobortis nunc ut fringilla feugiat. Donec vel neque eros.
                </Text>
            </VStack>
            <Box bgGradient='linear(to-b, #00121f, #00223b)'>
                <Stack spacing={8} p={10} direction={{ base: 'column', md: 'row' }} justifyContent='space-between' align='center'>
                    <Text pl={2} display={{ base: 'none', md: 'block' }}>© 2022 ITU. All Rights Reserved</Text>
                    <Image src={Logo} w={32} />

                    <NavIcons fontSize={24} mx={4} />
                    <Text pl={2} align='center' display={{ base: 'block', md: 'none' }}>© 2022 ITU. All Rights Reserved</Text>
                </Stack>
            </Box>
        </Box >
    )
}

export default Enter