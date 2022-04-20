import { Box, Image, VStack, HStack, Text } from '@chakra-ui/react'
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
            <VStack bgImage={bg} bgPosition='center' h='100vh'>
                <Image pb={164} pt={4} src={Logo} w={32} />
                <Image src={go} />
                <Image src={title} />
                <AnimatedButton enter={enter} />
                <Text w={{ base: '80%', md: '60%', lg: '50%' }} pt={32} align='center'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of m
                </Text>
            </VStack>

            <Box bgGradient='linear(to-b, #00121f, #00223b)'>
                <HStack spacing={8} p={10} justifyContent='space-between'>
                    <Text pl={2}>© 2022 ITU. All Rights Reserved</Text>
                    <Image src={Logo} w={32} />

                    <NavIcons fontSize={24} w={20} />

                </HStack>
            </Box>
        </Box>
    )
}

export default Enter