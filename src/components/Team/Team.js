import React from 'react'
import { Box, Heading, SimpleGrid, HStack, Text, Spacer, IconButton, Image } from '@chakra-ui/react'
import { FaTwitter } from "react-icons/fa";


import a from '../../images/a.png'

import b from '../../images/b.png'

import c from '../../images/c.png'

import d from '../../images/d.png'

import '../h.css'

const TeamMember = ({ name, role, src, to }) => {
    return (
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
                        <IconButton
                            icon={<FaTwitter />}
                            bgColor="transparent"
                            size='md'
                            _hover={{ opacity: 0.4 }}
                            _focus={{ outline: 0 }}
                        />
                    </HStack>
                    <Text size="md">
                        {role}
                    </Text>
                </Box>
                <Spacer />
                <Image w='120px' pr={2} src={src} draggable={false} />
            </HStack>
        </Box>
    )
}


function Team() {
    return (
        <Box w='100%' py={32} align={'center'}>
            <Box align='center' pb={16}>
                <Heading size="4xl" className='g'>TEAM</Heading>
            </Box>
            <Box mx={[4, 4, 10, 24, 72]}>
                <SimpleGrid columns={{ base: '1', md: '2' }} spacingY={4} spacingX={4} >
                    <TeamMember name="Chef Bob" role="Founder/Influencer" to={'https://twitter.com/chefbobsg'} src={a} />
                    <TeamMember name="X_Artist" role="Co-Founder/Artist" to={'https://twitter.com/wibletXD'} src={b} />
                    <TeamMember name="wibXD" role="Graphic Designer" to={'https://twitter.com/DiyseinITU'} src={c} />
                    <TeamMember name="Diysein" role="Discord Manager" src={d} />
                </SimpleGrid>
            </Box>

        </Box>
    )
}

export default Team