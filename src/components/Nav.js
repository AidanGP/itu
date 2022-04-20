import React from 'react';
import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    Collapse,
    Image
} from '@chakra-ui/react';
import { DragHandleIcon, CloseIcon } from '@chakra-ui/icons';
import NavIcons from './NavIcons/NavIcons'
import NavLinks from './NavLinks/NavLinks'

import Logo from '../images/yellowlogo.png'

export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box pt={8} mx={{ base: 4, lg: 32 }}>
                <Flex h={24} alignItems={'center'} justifyContent={'space-around'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <DragHandleIcon />}
                        variant="ghost"
                        color='white'
                        isRound
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        _hover={{ bg: 'rgb(0, 0, 0, 0.1)' }}
                        _focus={{ outline: 'none' }}
                    />
                    <Image src={Logo} w={32} display={{ base: 'none', md: 'block' }} />
                    <Box display={{ base: 'none', md: 'flex' }}>
                        <NavLinks />
                    </Box>
                    <NavIcons fontSize={20} />
                </Flex>


                <Collapse in={isOpen} animateOpacity>
                    {/* borderWidth={2} borderColor={'gray.700'} borderRadius={12} backdropFilter='auto' backdropBlur='3px' */}
                    <Box pt={12} mt={4} display={{ md: 'none' }}>
                        <NavLinks />
                    </Box>
                </Collapse>
            </Box>
        </>
    );
}