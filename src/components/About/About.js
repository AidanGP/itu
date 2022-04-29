import React from 'react'
import { Box, Heading, Image, Text, SimpleGrid, useDisclosure } from '@chakra-ui/react'

import a from '../../images/team_5.webp'
import b from '../../images/team_6.webp'
import c from '../../images/team_3.webp'
import d from '../../images/team_4.webp'

import Info from './Info'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion } from "framer-motion";

const AboutImg = ({delay, src, head, body, eyes, shirt, hair}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <motion.div
        whileHover={ {scale: 1.1 } }
        transition={{ type: "spring", duration: 0.8 }}
      >
        <AnimationOnScroll animateIn="animate__bounceIn" delay={delay} animateOnce>

          <Image src={src} borderRadius={16} boxShadow='xl' draggable={false} onClick={onOpen} _hover={{cursor: 'pointer'}} />
          <Info src={src} onOpen={onOpen} isOpen={isOpen} onClose={onClose} head={head} body={body} eyes={eyes} shirt={shirt} hair={hair} />

        </AnimationOnScroll>
      </motion.div>


    </>
  )
}


function About() {


    return (
        <Box w='100%' py={32} align='center' id='ABOUT'>
            <AnimationOnScroll animateIn="animate__jackInTheBox" animateOnce>
                <Heading size='4xl' className='g'>STORY</Heading>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn" delay={100} animateOnce>
                <Text py={8} mx={{ base: 16, md: 32, lg: 64 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non justo non nisi imperdiet tincidunt vel at dolor. Sed auctor tempor consectetur. Maecenas lobortis nunc ut fringilla feugiat. Donec vel neque eros. Nam sit amet elit massa. Vestibulum nunc nisi, commodo rhoncus tincidunt vitae, dictum id nibh.
                </Text>
            </AnimationOnScroll>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} mx={{ base: 16, md: 32, lg: 64 }} spacing={8}>

              <AboutImg src={a} delay={200} head={'test'} body={'test'} eyes={'test'} shirt={'test'} hair={'test'} />
              <AboutImg src={b} delay={300} head={'test1'} body={'test1'} eyes={'test1'} shirt={'test1'} hair={'test1'} />
              <AboutImg src={c} delay={400} head={'test2'} body={'test2'} eyes={'test2'} shirt={'test2'} hair={'test2'} />
              <AboutImg src={d} delay={500} head={'test3'} body={'test3'} eyes={'test3'} shirt={'test3'} hair={'test3'} />

            </SimpleGrid>
            {/* <Image src={bg1} style={{ zIndex: 0 }} opacity={0.6} position='absolute' top={24} right={96} w={64} draggable={false} /> */}
        </Box>
    )
}

export default About