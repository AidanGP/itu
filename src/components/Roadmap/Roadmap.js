import React, { useState } from 'react'
import { Box, Heading, Grid, GridItem, Center, Icon, VStack, HStack } from '@chakra-ui/react'
import { BiLandscape } from "react-icons/bi";
import { FaHandsHelping, FaHamburger, FaTshirt } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { ImMap2 } from "react-icons/im";
import { RiVipDiamondLine } from "react-icons/ri";

import overlay2 from '../../images/overlay2.webp'

import { motion } from "framer-motion";

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Joiner = ({ id, isHover, side }) => {
    return (
        <Center>
            <motion.div
              style={{ width: '100%' }}
              animate = {isHover !== false && isHover !== id ? {opacity : 0.5} : {opacity : 1} }
            >
                <AnimationOnScroll animateIn={`animate__bounceIn${side}`} style={{ width: '100%' }} offset={0} delay={200} animateOnce>
                    <Box borderColor='#3cf7f7' borderWidth={2} w='100%' />
                </AnimationOnScroll>
            </motion.div>
        </Center>
    )
}

const RoadmapIcon = ({ id, isHover, n, row, mid, ...rest }) => {
    return (

        <GridItem rowStart={row} rowSpan={3} colStart={mid} minW={32} display={{ base: 'none', md: 'block' }}>

                <Center bg='#004863' boxShadow='xl' w='100%' h='100%'  {...rest}>
                    {/* <Circle size='10px' bg='#3cf7f7' left={0} top={0} position='absolute' transform='50%, 50%' /> */}
                    <AnimationOnScroll animateIn="animate__zoomIn" offset={0} animateOnce>
                        <motion.div
                          animate = {isHover !== false && isHover !== id ? {opacity : 0.5} : {opacity : 1} }
                        >
                        <Icon as={n} w={12} h={12} color='#3cf7f7' />
                        </motion.div>
                    </AnimationOnScroll>
                </Center>

        </GridItem>

    )
}



const RoadmapItem = ({ id, phase, content, src, side, isHover, setIsHover, ...rest }) => {
    return (
        <>
            <motion.div
              style={{ height: '100%' }}
              whileHover={
                  {scale: 1.05}
              }
              onHoverStart={() => {
                  setIsHover(id);
              }}
              onHoverEnd={() => {
                  setIsHover(false);
              }}
              animate = {isHover !== false && isHover !== id ? {opacity : 0.5} : {opacity : 1}}
              transition={{ type: "spring", duration: 0.8 }}
            >
                <AnimationOnScroll animateIn={`animate__bounceIn${side}`} offset={0} style={{ height: '100%' }} animateOnce>
                    <Box bgColor='#004863' p={5} borderRadius={16} boxShadow='xl' {...rest} h='100%' align='left'>

                        <HStack justifyContent='space-between'>
                            <VStack align='left'>
                                <Box textTransform='capitalize' >
                                    <Heading size="md" pb={2} color='#3cf7f7'>{phase}</Heading>
                                </Box>
                                <Box>
                                    {
                                        content.map(line =>

                                            <p key={content.indexOf(line)}>
                                                {line}
                                            </p>

                                        )
                                    }
                                </Box>
                            </VStack>
                        </HStack>
                    </Box>
                </AnimationOnScroll>
            </motion.div>
        </>
    )
}


function Roadmap() {
    const n_columns = 17
    const item_w = 7
    const mid = Math.floor((n_columns + 1) / 2)
    const item_start = n_columns - item_w + 1

    const [isHover, setIsHover] = useState(false);

    return (
        <Box w='100%' py={32} bgColor='#00233d' bgImage={overlay2} id='ROADMAP'>
            <Box mx={{ base: 4, md: 12, lg: 24, xl: 48 }} align='center'>
                <Box pb={16} className='p'>
                    <AnimationOnScroll animateIn="animate__jackInTheBox" offset={0} animateOnce>
                        <Heading size="4xl" className='g'>ROADMAP</Heading>
                    </AnimationOnScroll>
                </Box>

                <Grid templateColumns={{ base: 'repeat(4, 1fr)', md: `repeat(${n_columns}, 1fr)` }} templateRows='repeat(14)' rowGap={{ base: 4, md: 4 }}>

                    <GridItem rowStart={2} colStart={8} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner id={0} isHover={isHover} side='Left' />
                    </GridItem>
                    <GridItem rowStart={4} colStart={10} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner id={1} isHover={isHover} side='Right' />
                    </GridItem>
                    <GridItem rowStart={6} colStart={8} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner id={2} isHover={isHover} side='Left' />
                    </GridItem>
                    <GridItem rowStart={8} colStart={10} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner id={3} isHover={isHover} side='Right' />
                    </GridItem>
                    <GridItem rowStart={10} colStart={8} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner id={4} isHover={isHover} side='Left' />
                    </GridItem>
                    <GridItem rowStart={12} colStart={10} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner id={5} isHover={isHover} side='Right' />
                    </GridItem>
                    <GridItem rowStart={14} colStart={8} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner id={6} isHover={isHover} side='Left' />
                    </GridItem>

                    {/* 1 */}
                    <GridItem rowStart={1} rowSpan={{ base: 1, md: 3 }} colStart={1} colSpan={item_w}>
                        <RoadmapItem id={0} isHover={isHover} setIsHover={setIsHover} side='Left' phase='Merchandise' content={['Free ITU hoodie for holders.']} />
                    </GridItem>

                    {/* 2 */}
                    <GridItem rowStart={{ base: 2, md: 3 }} rowSpan={{ base: 1, md: 3 }} colStart={{ base: 1, md: item_start }} colSpan={item_w}>
                        <RoadmapItem id={1} isHover={isHover} setIsHover={setIsHover} side='Right' phase='Charity Drive/Donation' content={['We will list a few charity organization and holders will choose one to whom they wish to donate.']} />
                    </GridItem>

                    {/* 3 */}
                    <GridItem rowStart={{ base: 3, md: 5 }} rowSpan={{ base: 1, md: 3 }} colStart={1} colSpan={item_w}>
                        <RoadmapItem id={2} isHover={isHover} setIsHover={setIsHover} side='Left' phase='Real Life Event for ITU holders' content={['ITU food fiesta & fun fair(location to be confirmed)', 'ITU Holders gathering, meet & dine.']} />
                    </GridItem>

                    {/* 4 */}
                    <GridItem rowStart={{ base: 4, md: 7 }} rowSpan={{ base: 1, md: 3 }} colStart={{ base: 1, md: item_start }} colSpan={item_w}>
                        <RoadmapItem id={3} isHover={isHover} setIsHover={setIsHover} side='Right' phase='Acquire a MetaVerse land' content={['As the buzz around the metaverse picks up pace, the virtual land opportunity takes centre stage, we wouldn’t want to miss out the opportunity and we will purchase a top tier metaverse land for ITU for future adoption.']} />
                    </GridItem>

                    {/* 5 */}
                    <GridItem rowStart={{ base: 5, md: 9 }} rowSpan={{ base: 1, md: 3 }} colStart={1} colSpan={item_w}>
                        <RoadmapItem id={4} isHover={isHover} setIsHover={setIsHover} side='Left' phase='ITU Food Chain or Merchandise retail shop.' content={['ITU Food concept restaurant headed by our founder celebrity chef bob.', 'ITU merchandise collabs with known brands.', 'Part of sales proceed will go back to the community wallet.']} />
                    </GridItem>

                    {/* 6 */}
                    <GridItem rowStart={{ base: 6, md: 11 }} rowSpan={{ base: 1, md: 3 }} colStart={{ base: 1, md: item_start }} colSpan={item_w}>
                        <RoadmapItem id={5} isHover={isHover} setIsHover={setIsHover} side='Right' phase='2nd NFT Drop' content={['Companion drop for NFT holders']} />
                    </GridItem>

                    {/* 7 */}
                    <GridItem rowStart={{ base: 7, md: 13 }} rowSpan={{ base: 1, md: 3 }} colStart={1} colSpan={item_w}>
                        <RoadmapItem id={6} isHover={isHover} setIsHover={setIsHover} side='Left' phase='Roadmap 2.0' content={['Improvisation of roadmap 1.0, dao governance, tokenisation and nft/token staking are one of the few that we are working hard to make it a realisation.']} />
                    </GridItem>


                    {/* Center */}
                    <RoadmapIcon id={0} isHover={isHover} row={1} n={FaTshirt} mid={mid} borderTopRadius={16} />
                    <RoadmapIcon id={1} isHover={isHover} row={3} n={FaHandsHelping} mid={mid} />
                    <RoadmapIcon id={2} isHover={isHover} row={5} n={FaHamburger} mid={mid} />
                    <RoadmapIcon id={3} isHover={isHover} row={7} n={BiLandscape} mid={mid} />
                    <RoadmapIcon id={4} isHover={isHover} row={9} n={AiFillShop} mid={mid} />
                    <RoadmapIcon id={5} isHover={isHover} row={11} n={RiVipDiamondLine} mid={mid} />
                    <RoadmapIcon id={6} isHover={isHover} row={13} n={ImMap2} mid={mid} borderBottomRadius={16} />

                </Grid>
            </Box>
        </Box >
    )
}

export default Roadmap