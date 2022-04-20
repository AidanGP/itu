import React from 'react'
import { Stack } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai'



const IconLink = ({ name, icon, ...rest }) => {
    return (
        <IconButton
            aria-label={name}
            icon={icon}
            color={'#fcec37'}
            isRound
            bgColor="transparent"
            _hover={{ opacity: 0.4 }}
            _focus={{ outline: 0 }}
            {...rest}
        />
    )
}

function NavIcons({ children, ...rest }) {
    return (
        <Stack direction={'row'} align="center" spacing={3}>
            <IconLink name="Twitter" icon={<FaTwitter />} {...rest} />
            <IconLink name="Instagram" icon={<AiFillInstagram />} {...rest} />
            <IconLink name="Discord" icon={<FaDiscord />} {...rest} />
            {children}
        </Stack>
    )
}

export default NavIcons