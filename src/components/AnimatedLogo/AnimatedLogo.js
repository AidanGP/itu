import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { motion } from "framer-motion";
import logo from '../../images/glowyellowlogo.png'
import logo_no_glow from '../../images/yellowlogo.png'

function AnimatedLogo() {
    const bounceTransition = {
        y: {
            duration: 0.4,
            yoyo: 2,
            ease: "easeOut",
        }
    }

    return (
        <Box>
            <motion.div
                transition={bounceTransition}
                animate={{
                    y: ["110%", "-10%"]
                }}
            >
                <Image src={logo_no_glow} zIndex={0} w={85} mx={7.5} draggable={false} />
            </motion.div>
        </Box>
    )
}

export default AnimatedLogo