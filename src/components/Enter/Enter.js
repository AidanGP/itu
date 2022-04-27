import { Box, Image, VStack, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import AnimatedButton from '../AnimatedButton/AnimatedButton'
import NavIcons from '../NavIcons/NavIcons'

import Logo from '../../images/yellowlogo.png'
import go from '../../images/go.png'
import title from '../../images/title.png'

import bg from '../../images/bg_test.png'

function Enter({ enter }) {
    return (
        <Box color='white'>
            <VStack bgImage={bg} bgPosition='center' h={{ xl: '100vh' }}>
                <Image pb={164} pt={4} src={Logo} draggable={false} w={32} loading='lazy' />
                <Image src={go} draggable={false} loading='lazy' />
                <Image src={title} draggable={false} loading='lazy' />
                <AnimatedButton enter={enter} />
                <Text maxW={840} py={{ base: 12, md: 32 }} align='center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo non nisi imperdiet tincidunt vel at dolor. Sed auctor tempor consectetur. Maecenas lobortis nunc ut fringilla feugiat. Donec vel neque eros.
                </Text>
            </VStack>
            <Box bgGradient='linear(to-b, #00121f, #00223b)'>
                <Stack spacing={8} p={10} direction={{ base: 'column', lg: 'row' }} justifyContent='space-between' align='center'>
                    <Text pl={2} display={{ base: 'none', lg: 'block' }}>© 2022 ITU. All Rights Reserved</Text>
                    <Image src={Logo} w={32} pl={{ base: 0, lg: 12 }} loading='lazy' />

                    <NavIcons fontSize={24} mx={4} />
                    <Text pl={2} align='center' display={{ base: 'block', lg: 'none' }}>© 2022 ITU. All Rights Reserved</Text>
                </Stack>
            </Box>
        </Box>
    )
}

export default Enter