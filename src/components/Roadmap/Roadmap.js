import React from 'react'
import { Box, Heading, Grid, GridItem, Center, Icon } from '@chakra-ui/react'
import { BiLandscape } from "react-icons/bi";
import { FaHandsHelping, FaHamburger, FaTshirt } from "react-icons/fa";
import { AiFillShop } from "react-icons/ai";
import { ImMap2 } from "react-icons/im";
import { RiVipDiamondLine } from "react-icons/ri";

import '../h.css'


const Joiner = () => {
    return (
        <Center>
            <Box borderColor='#3cf7f7' borderWidth={2} w='100%'>
            </Box>
        </Center>
    )
}

const RoadmapIcon = ({ n, row, mid, ...rest }) => {
    return (
        <GridItem rowStart={row} rowSpan={3} colStart={mid} minW={32} display={{ base: 'none', md: 'block' }}>
            <Center bg='#004863' boxShadow='xl' w='100%' h='100%'  {...rest}>
                {/* <Circle size='10px' bg='#3cf7f7' left={0} top={0} position='absolute' transform='50%, 50%' /> */}
                <Icon as={n} w={12} h={12} color='#3cf7f7' />
            </Center>
        </GridItem>
    )
}



const RoadmapItem = ({ phase, content, ...rest }) => {
    return (
        <>
            <Box bgColor='#004863' p={5} borderRadius={16} boxShadow='xl' {...rest} h='100%' align='left'>
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
            </Box>
        </>
    )
}


function Roadmap() {
    const n_columns = 17
    const item_w = 7
    const mid = Math.floor((n_columns + 1) / 2)
    const item_start = n_columns - item_w + 1
    return (
        <Box w='100%' py={32}>
            <Box mx={{ base: 4, md: 12, lg: 24, xl: 64 }} align='center'>
                <Box pb={16} className='p'>
                    <Heading size="4xl" className='g'>ROADMAP</Heading>
                </Box>

                <Grid templateColumns={{ base: 'repeat(4, 1fr)', md: `repeat(${n_columns}, 1fr)` }} templateRows='repeat(14)' rowGap={{ base: 4, md: 4 }}>

                    {/* 1 */}
                    <GridItem rowStart={1} rowSpan={{ base: 1, md: 3 }} colStart={1} colSpan={item_w}>
                        <RoadmapItem phase='Merchandise' content={['Free ITU hoodie for holders.']} />
                    </GridItem>

                    {/* 2 */}
                    <GridItem rowStart={{ base: 2, md: 3 }} rowSpan={{ base: 1, md: 3 }} colStart={{ base: 1, md: item_start }} colSpan={item_w}>
                        <RoadmapItem phase='Charity Drive/Donation' content={['We will list a few charity organization and holders will choose one to whom they wish to donate.']} />
                    </GridItem>

                    {/* 3 */}
                    <GridItem rowStart={{ base: 3, md: 5 }} rowSpan={{ base: 1, md: 3 }} colStart={1} colSpan={item_w}>
                        <RoadmapItem phase='Real Life Event for ITU holders' content={['ITU food fiesta & fun fair(location to be confirmed)', 'ITU Holders gathering, meet & dine.']} />
                    </GridItem>

                    {/* 4 */}
                    <GridItem rowStart={{ base: 4, md: 7 }} rowSpan={{ base: 1, md: 3 }} colStart={{ base: 1, md: item_start }} colSpan={item_w}>
                        <RoadmapItem phase='Acquire a MetaVerse land' content={['As the buzz around the metaverse picks up pace, the virtual land opportunity takes centre stage, we wouldn’t want to miss out the opportunity and we will purchase a top tier metaverse land for ITU for future adoption.']} />
                    </GridItem>

                    {/* 5 */}
                    <GridItem rowStart={{ base: 5, md: 9 }} rowSpan={{ base: 1, md: 3 }} colStart={1} colSpan={item_w}>
                        <RoadmapItem phase='ITU Food Chain or Merchandise retail shop.' content={['ITU Food concept restaurant headed by our founder celebrity chef bob.', 'ITU merchandise collabs with known brands.', 'Part of sales proceed will go back to the community wallet.']} />
                    </GridItem>

                    {/* 6 */}
                    <GridItem rowStart={{ base: 6, md: 11 }} rowSpan={{ base: 1, md: 3 }} colStart={{ base: 1, md: item_start }} colSpan={item_w}>
                        <RoadmapItem phase='2nd NFT Drop' content={['Companion drop for NFT holders']} />
                    </GridItem>

                    {/* 7 */}
                    <GridItem rowStart={{ base: 7, md: 13 }} rowSpan={{ base: 1, md: 3 }} colStart={1} colSpan={item_w}>
                        <RoadmapItem phase='Roadmap 2.0' content={['Improvisation of roadmap 1.0, dao governance, tokenisation and nft/token staking are one of the few that we are working hard to make it a realisation.']} />
                    </GridItem>


                    {/* Center */}
                    <RoadmapIcon row={1} n={FaTshirt} mid={mid} borderTopRadius={16} />
                    <RoadmapIcon row={3} n={FaHandsHelping} mid={mid} />
                    <RoadmapIcon row={5} n={FaHamburger} mid={mid} />
                    <RoadmapIcon row={7} n={BiLandscape} mid={mid} />
                    <RoadmapIcon row={9} n={AiFillShop} mid={mid} />
                    <RoadmapIcon row={11} n={RiVipDiamondLine} mid={mid} />
                    <RoadmapIcon row={13} n={ImMap2} mid={mid} borderBottomRadius={16} />


                    <GridItem rowStart={2} colStart={8} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner />
                    </GridItem>
                    <GridItem rowStart={4} colStart={10} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner />
                    </GridItem>
                    <GridItem rowStart={6} colStart={8} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner />
                    </GridItem>
                    <GridItem rowStart={8} colStart={10} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner />
                    </GridItem>
                    <GridItem rowStart={10} colStart={8} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner />
                    </GridItem>
                    <GridItem rowStart={12} colStart={10} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner />
                    </GridItem>
                    <GridItem rowStart={14} colStart={8} minW={30} display={{ base: 'none', md: 'block' }}>
                        <Joiner />
                    </GridItem>
                </Grid>
            </Box>
        </Box >
    )
}

export default Roadmap