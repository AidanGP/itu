import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Image
} from '@chakra-ui/react';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


import bg from './images/bg_test_6.png'
import logo from './images/title2.png'

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

import overlay from './images/overlay.png'

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
                <Box bg='#00233d' bgImage={overlay}>
                  <Box h='100vh' bgImage={bg} bgPosition='center' position='relative'>
                    <Nav />
                    <Box align='center' pt={{ base: 32, sm: 16, md: 0, lg: 0, xl: 24, '2xl': 36 }}>
                      <AnimationOnScroll animateIn="animate__jackInTheBox" animateOnce>
                        <Image src={logo} w={840} draggable={false} />
                      </AnimationOnScroll>
                    </Box>
                    <Image src={left} w={{ base: 52, md: '30%' }} position='absolute' bottom={0} left={{ base: 10, md: 16 }} display={{ base: 'none', sm: 'block' }} draggable={false} />
                    <Image src={right} w={{ base: 52, md: '30%' }} position='absolute' bottom={0} right={{ base: 10, md: 16 }} display={{ base: 'none', sm: 'block' }} draggable={false} />
                  </Box>
                  <InfoCarousel />

                  <About />
                  {/* <Carousel /> */}
                </Box>
                <hr color='#3cf7f7' style={{ height: '3px', border: 0 }} />
                <Roadmap />
                <hr color='#3cf7f7' style={{ height: '3px', border: 0 }} />
                <Box bg='#00233d' bgImage={overlay}>

                  <Team />
                </Box>
                <hr color='#3cf7f7' style={{ height: '3px', border: 0 }} />
                <FAQ />
                <Footer />



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
