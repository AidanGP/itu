import React from 'react'
import { Box, Heading, SimpleGrid, HStack, Text, Spacer, IconButton, Image } from '@chakra-ui/react'
import { FaTwitter } from "react-icons/fa";


import a from '../../images/a.webp'

import b from '../../images/b.webp'

import c from '../../images/c.webp'

import d from '../../images/d.webp'
import e from '../../images/e.webp'

import { motion } from "framer-motion";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const TeamMember = ({ name, role, src, to, delay, side }) => {
    return (
      <motion.div
        whileHover={ {y: -5} }
        transition={{ type: "spring", duration: 0.8 }}
      >
        <AnimationOnScroll animateIn={`animate__zoomIn${side}`} delay={delay} animateOnce>
            <Box
                bg={'#004863'}
                rounded="12px"
                shadow='xl'

            >
                <HStack spacing={4}>

                    <Box align="left" pl={8}>
                        <HStack>
                            <Heading size='lg' fontWeight='bold'>
                                {name}
                            </Heading>
                            {to &&
                                <a
                                    href={to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><IconButton
                                        icon={<FaTwitter />}
                                        bgColor="transparent"
                                        size='md'
                                        _hover={{ opacity: 0.4 }}
                                        _focus={{ outline: 0 }}
                                    />
                                </a>
                            }
                        </HStack>
                        <Text size="md">
                            {role}
                        </Text>
                    </Box>
                    <Spacer />
                    <Image w='120px' pr={2} src={src} draggable={false} loading='lazy' />
                </HStack>
            </Box>
        </AnimationOnScroll>
      </motion.div>
    )
}


function Team() {
    return (
        <Box w='100%' py={32} align={'center'} boxShadow='xl' id='TEAM'>
            <Box align='center' pb={16}>
                <AnimationOnScroll animateIn='animate__jackInTheBox' offset={0} animateOnce>
                    <Heading size="4xl" className='g'>TEAM</Heading>
                </AnimationOnScroll>
            </Box>
            <Box mx={[4, 4, 10, 24, 72]}>
                <SimpleGrid columns={{ base: '1', md: '2' }} spacingY={4} spacingX={4} >
                    <TeamMember name="Chef Bob" role="Influencer/Marketing" to={'https://twitter.com/chefbobsg'} src={a} delay={0} side={'Left'} />
                    <TeamMember name="Aiman" role="Artist/Adviser" src={b} delay={50} side={'Right'} />
                    <TeamMember name="wibXD" role="Graphic Designer" to={'https://twitter.com/wibletXD'} src={c} delay={100} side={'Left'} />
                    <TeamMember name="Abutuqo" role="Team ITU Advisor" to={'https://twitter.com/abutuqo80'} src={e} delay={150} side={'Right'} />
                    <TeamMember name="Diysein" role="Teach and Operation" to={'https://twitter.com/DiyseinITU'} src={d} delay={200} side={'Left'} />
                </SimpleGrid>
            </Box>

        </Box>
    )
}

export default Team