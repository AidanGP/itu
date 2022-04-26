import React from 'react';
import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    Collapse,
    Image
} from '@chakra-ui/react';
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import NavIcons from './NavIcons/NavIcons'
import NavLinks from './NavLinks/NavLinks'

import Logo from '../images/yellowlogo.webp'

export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box pt={8} mx={{ base: 12, md: 32, xl: 0 }}>
                <Flex h={24} alignItems={'center'} justifyContent={{ base: 'space-between', xl: 'space-evenly' }}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
                        variant="ghost"
                        color='#fcec37'
                        isRound
                        fontSize={24}
                        aria-label={'Open Menu'}
                        display={{ xl: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        _hover={{ bg: 'rgb(0, 0, 0, 0.1)' }}
                        _focus={{ outline: 'none' }}
                    />

                    <Box display={{ base: 'none', xl: 'flex' }}>
                        <NavLinks />
                    </Box>
                    <Image src={Logo} w={32} display={{ base: 'none', xl: 'block' }} draggable={false} mr={64} />
                    <NavIcons fontSize={20} />
                </Flex>


                <Collapse in={isOpen} animateOpacity>
                    {/* borderWidth={2} borderColor={'gray.700'} borderRadius={12} backdropFilter='auto' backdropBlur='3px' */}
                    <Box pt={12} mt={4} display={{ xl: 'none' }}>
                        <NavLinks />
                    </Box>
                </Collapse>
            </Box>
        </>
    );
}