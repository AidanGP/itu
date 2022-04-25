import React from 'react'
import { Stack } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai'



const IconLink = ({ name, icon, to, ...rest }) => {
    return (
        <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
        >
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
        </a>
    )
}

function NavIcons({ children, ...rest }) {
    return (
        <Stack direction={'row'} align="center" spacing={3}>
            <IconLink name="Twitter" icon={<FaTwitter />} to={'https://twitter.com/ItuNft'} {...rest} />
            <IconLink name="Instagram" icon={<AiFillInstagram />} to={'https://www.instagram.com/itu_nft/'} {...rest} />
            <IconLink name="Discord" icon={<FaDiscord />} to={'https://discord.com/invite/VzCZgMHrfv'} {...rest} />
            {children}
        </Stack>
    )
}

export default NavIcons