import React from 'react'
import './NavLinks.css'
import { Stack, Link } from '@chakra-ui/react'

const NavLink = ({ name }) => {
    return (
        <Link className="list-item" _hover={{ underline: 'none' }} fontSize={24}>
            <span className="split-text" data-text={name}>{name}</span>
        </Link>
    )
}

function NavLinks() {
    return (
        <Stack direction={{ base: 'column', md: 'row' }} align={'center'} className="list" spacing={6} >
            <NavLink name='ABOUT' />
            <NavLink name='ROADMAP' />
            <NavLink name='TEAM' />
            <NavLink name='FAQ' />
        </Stack>
    )
}

export default NavLinks