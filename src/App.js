import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Image,
  HStack
} from '@chakra-ui/react';

import bg from './images/bg_test_6.png'
import logo from './images/title_logo.png'

import Nav from './components/Nav'
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel'
import Roadmap from './components/Roadmap/Roadmap';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

import { motion } from "framer-motion";
import Enter from './components/Enter/Enter'

import InfoCarousel from './components/InfoCarousel/InfoCarousel'

import left from './images/left.png';
import right from './images/right.png'

function App() {
  const firstRender = useRef(true);
  const [isEnter, setIsEnter] = useState(false);
  const [isPageRendered, setIsPageRendered] = useState(false);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      const timer = setTimeout(() => {
        setIsPageRendered(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isEnter]);

  const transition = {
    type: "spring",
    damping: 25,
    stiffness: 80
  };

  return (
    <>
      {
        isPageRendered ?
          <>
            <Box bg='#00121f' color='white' overflowX='hidden'>
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ transition }}>
                <Box bg='#00233d'>
                  <Box h='100vh' bgImage={bg} bgPosition='center' position='relative'>
                    <Nav />
                    <Box align='center' pt={{ base: 16, lg: 32 }}>
                      <Image src={logo} w={720} />
                    </Box>
                    <Image src={left} w={{ base: 52, md: '30%' }} position='absolute' bottom={0} left={{ base: 10, md: 16 }} display={{ base: 'none', sm: 'block' }} />
                    <Image src={right} w={{ base: 52, md: '30%' }} position='absolute' bottom={0} right={{ base: 10, md: 16 }} display={{ base: 'none', sm: 'block' }} />
                  </Box>

                  <InfoCarousel />

                  <About />
                  <Carousel />
                  <Roadmap />
                  <Team />
                  <FAQ />
                  <Footer />
                </Box>
              </motion.div>
            </Box>
          </> :
          <Box bg={'#00121f'}>
            <motion.div
              animate={{ opacity: isEnter ? 0 : 1 }}
              transition={transition}
            >
              <Enter enter={() => setIsEnter(true)} />
            </motion.div>
          </Box>
      }
    </>
  );

}

export default App;
