import { Box, Image, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import AnimatedButton from '../AnimatedButton/AnimatedButton'

import Logo from '../../images/yellowlogo.webp'
import go from '../../images/go.webp'
import title from '../../images/title.webp'

import bg from '../../images/bg_test-min.webp'

import Footer from '../Footer/Footer'



function Enter({ enter }) {
    return (
        <Box color='white'>
            <VStack bgImage={bg} bgPosition='center' h={{ xl: '100vh' }}>


                <Image src={Logo} pb={164} pt={4} alt={'logo'} draggable={false} w={32} loading='lazy' />
                <Image src={go} draggable={false} alt={'title_1'} loading='lazy' />
                <Image src={title} draggable={false} alt={'title_2'} loading='lazy' />



                <AnimatedButton enter={enter} />
                <Text maxW={840} py={{ base: 200, md: 32 }} fontSize={'xl'} align='center'>
                  An alien themed NFT collection where your token doubles as your membership into the Unknown.
                  Join us and become one with the Unknown...
                </Text>

            </VStack>
            <Footer />
        </Box>
    )
}

export default Enter