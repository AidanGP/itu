import React from 'react'
import { Box, Heading, Image, Text, SimpleGrid, useDisclosure } from '@chakra-ui/react'

import a from '../../images/team_5.webp'
import b from '../../images/team_6.webp'
import c from '../../images/team_3.webp'
import d from '../../images/team_4.webp'

import Info from './Info'
import Gallery from '../Carousel/Gallery'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { motion } from "framer-motion";

const AboutImg = ({delay, src, head, skin, outfit, eyes, mouth, food, back}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <motion.div
        whileHover={ {scale: 1.1 } }
        transition={{ type: "spring", duration: 0.8 }}
      >
        <AnimationOnScroll animateIn="animate__bounceIn" delay={delay} animateOnce>

          <Image src={src} borderRadius={16} boxShadow='xl' draggable={false} onClick={onOpen} _hover={{cursor: 'pointer'}} />
          <Info src={src} onOpen={onOpen} isOpen={isOpen} onClose={onClose} head={head} skin={skin} outfit={outfit} eyes={eyes} mouth={mouth} food={food} back={back} />

        </AnimationOnScroll>
      </motion.div>
    </>
  )
}


function About() {


    return (
      <>
        <Box w='100%' py={32} align='center' id='ABOUT'>
            <AnimationOnScroll animateIn="animate__jackInTheBox" animateOnce>
                <Heading size='4xl' className='g'>STORY</Heading>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn" delay={100} animateOnce>
                <Text py={8} mx={{ base: 16, md: 32, lg: 64 }} fontSize={'xl'} letterSpacing={0.5}>
                  <strong>ITU</strong> is a collection of unknown creatures wandering about the universe! These "Unknown" creatures are all entering new galaxies with a careful invasion which is planned with many utilities. Join us in the Metaverse as we dive into Tokenomics, Staking, IRL events and much much more....We have a wonderful and visionary team that are doxxed and lead by our famous celebrity chef!
                </Text>
            </AnimationOnScroll>
            <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} mx={{ base: 16, md: 32, lg: 64 }} spacing={8}>

              <AboutImg src={a} delay={200} head={'Electric'} skin={'Cyan'} outfit={'White Hoodie'} eyes={'Brown'} mouth={'Tongue Out'} food={'Frappaccino'} back={'None'} />
              <AboutImg src={b} delay={300} head={'Purple Hair'} skin={'Purple'} outfit={'Black Jacket'} eyes={'Red'} mouth={'Grin'} food={'Chocolate'} back={'Rifle'} />
              <AboutImg src={c} delay={400} head={'Fire'} skin={'Black'} outfit={'Orange Jacket'} eyes={'Full Red'} mouth={'Angry'} food={'Cookie'} back={'None'} />
              <AboutImg src={d} delay={500} head={'Red Horns'} skin={'Pale'} outfit={'Red Jacket'} eyes={'Brown'} mouth={'Grin'} food={'Chocolate'} back={'None'} />

            </SimpleGrid>
            {/* <Image src={bg1} style={{ zIndex: 0 }} opacity={0.6} position='absolute' top={24} right={96} w={64} draggable={false} /> */}

        </Box>
        <Box>
          {/*<Gallery slides={[<Image src={a} borderRadius={16} />, <Image src={b} borderRadius={16} />, <Image src={c} borderRadius={16} />, <Image src={d} borderRadius={16} />]} />*/}
        </Box>
      </>
    )
}

export default About