import React from 'react'
import { Box, Heading, Image, Text, SimpleGrid } from '@chakra-ui/react'

import a from '../../images/team_5.png'
import b from '../../images/team_6.png'
import c from '../../images/team_3.png'
import d from '../../images/team_4.png'

import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {


    return (
        <Box w='100%' py={32} align='center' id='ABOUT'>

            <AnimationOnScroll animateIn="animate__jackInTheBox" animateOnce>
                <Heading size='4xl' className='g'>ABOUT US</Heading>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn" delay={100} animateOnce>
                <Text py={8} mx={{ base: 16, md: 32, lg: 64 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo non nisi imperdiet tincidunt vel at dolor. Sed auctor tempor consectetur. Maecenas lobortis nunc ut fringilla feugiat. Donec vel neque eros. Nam sit amet elit massa. Vestibulum nunc nisi, commodo rhoncus tincidunt vitae, dictum id nibh.
                </Text>
            </AnimationOnScroll>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} mx={{ base: 16, md: 32, lg: 64 }} spacing={8}>
                <AnimationOnScroll animateIn="animate__bounceIn" delay={200} animateOnce>
                    <Image src={a} borderRadius={16} boxShadow='xl' />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__bounceIn" delay={300} animateOnce>
                    <Image src={b} borderRadius={16} boxShadow='xl' />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__bounceIn" delay={400} animateOnce>
                    <Image src={c} borderRadius={16} boxShadow='xl' />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__bounceIn" delay={500} animateOnce>
                    <Image src={d} borderRadius={16} boxShadow='xl' />
                </AnimationOnScroll>
            </SimpleGrid>
            {/* <Image src={bg1} style={{ zIndex: 0 }} opacity={0.6} position='absolute' top={24} right={96} w={64} draggable={false} /> */}
        </Box>
    )
}

export default About