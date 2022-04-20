import React from 'react'
import './styles.css'
import { Box, Text, HStack } from '@chakra-ui/react';

const Div = () => {
    return (
        <Text>
            |
        </Text>
    )
}

const InfoContent = () => {
    const c = '#fcec37'
    return (
        <HStack h='100%' align='center' fontSize='2xl'>
            <Text color={c}>{' '}Public Sale TBD</Text> <Div />
            <Text color={c}>Pre-sale Mint April 20th 1620 BST</Text> <Div />
            <Text color={c}>Public Mint TBD</Text> <Div />
            <Text color={c}>8888 + 12 Legendary</Text> <Div />
            <Text color={c}>180 Traits</Text> <Div />
            <Text color={c}>Pre-sale Price 0.06942 Eth</Text> <Div />
            <Text color={c}>{' '}Public Sale TBD</Text> <Div />
            <Text color={c}>Pre-sale Mint April 20th 1620 BST</Text> <Div />
            <Text color={c}>Public Mint TBD</Text> <Div />
            <Text color={c}>8888 + 12 Legendary</Text> <Div />
            <Text color={c}>180 Traits</Text> <Div />
            <Text color={c}>Pre-sale Price 0.06942 Eth</Text> <Div />
            <Text color={c}>{' '}Public Sale TBD</Text> <Div />
            <Text color={c}>Pre-sale Mint April 20th 1620 BST</Text> <Div />
            <Text color={c}>Public Mint TBD</Text> <Div />
            <Text color={c}>8888 + 12 Legendary</Text> <Div />
            <Text color={c}>180 Traits</Text> <Div />
            <Text color={c}>Pre-sale Price 0.06942 Eth</Text> <Div />
        </HStack>
    )
}

function InfoCarousel() {
    return (
        <Box overflowX={'hidden'}>
            <Box className='infosliding'>
                <InfoContent />
            </Box>
        </Box>
    )
}

export default InfoCarousel