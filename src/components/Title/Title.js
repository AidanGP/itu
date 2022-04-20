import { Heading, Box } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion";
import './styles.css'

function Title() {
    return (
        <Box textAlign="center" justifyContent='center' mt={4} display="flex" zIndex={1}>
            <motion.div
                transition={{ duration: 1 }}
                whileHover={{ rotateX: 20, rotateY: -20 }}
            >
                <motion.div
                    animate={{ x: 0 }}
                    transition={{ from: 200, duration: 1 }}
                >
                    <Heading fontSize={{ base: 60, md: 80, lg: 100 }} color='white'>
                        <motion.h1
                            animate={{ scale: [0.3, 1] }}
                            transition={{ duration: 0.5 }}
                        >
                            Into The
                        </motion.h1>
                    </Heading>
                </motion.div>

                <motion.div
                    animate={{ x: 0 }}
                    transition={{ from: -200, duration: 1 }}
                >
                    <Heading fontSize={{ base: 80, md: 100, lg: 148 }} textDecoration='underline' textDecorationStyle={'dashed'} textUnderlineOffset={15} color='#fcec37'>
                        <motion.h1 animate={{ scale: [0.4, 1] }} transition={{ duration: 1 }} >
                            Unknown
                        </motion.h1>
                    </Heading>
                </motion.div>
            </motion.div>
        </Box >
    )
}

export default Title