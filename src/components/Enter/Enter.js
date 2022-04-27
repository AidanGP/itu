import { Box, Image, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import AnimatedButton from '../AnimatedButton/AnimatedButton'

import Logo from '../../images/yellowlogo.png'
import go from '../../images/go.png'
import title from '../../images/title.png'

import bg from '../../images/bg_test-min.png'

import Footer from '../Footer/Footer'

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
            <Footer />
        </Box>
    )
}

export default Enter