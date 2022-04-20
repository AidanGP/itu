import React from 'react'
import { Box, Heading, Image, Text, SimpleGrid } from '@chakra-ui/react'

import a from '../../images/team_1.png'
import b from '../../images/team_2.png'
import c from '../../images/team_3.png'
import d from '../../images/team_4.png'

import '../h.css'

import bg1 from '../../images/bg1.png'

function About() {


    return (
        <Box w='100%' py={32} align='center'>

            <Heading size='4xl' className='g'>ABOUT US</Heading>
            <Text py={8} mx={{ base: 16, md: 32, lg: 64 }}>
                We are close-knit friends who took on a mission: Help People with Spinal Cord Injuries. This mission is close to our hearts as one of us has suffered from the same in the past. We know how life-changing this incident can be and want the people with Injuries to know that you are not alone. We want to contribute our bit to help people walk again, run again, live again. With such injuries comes a lot of back maintenance, medical bills which not everyone can afford. To bring a change, we have created SPINAL FOX Nfts.
            </Text>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} mx={{ base: 16, md: 32, lg: 64 }} spacing={8}>
                <Image src={a} borderRadius={4} boxShadow='xl' />
                <Image src={b} borderRadius={4} boxShadow='xl' />
                <Image src={c} borderRadius={4} boxShadow='xl' />
                <Image src={d} borderRadius={4} boxShadow='xl' />
            </SimpleGrid>
            {/* <Image src={bg1} style={{ zIndex: 0 }} opacity={0.6} position='absolute' top={24} right={96} w={64} draggable={false} /> */}
        </Box>
    )
}

export default About