"use client"
import React, { useEffect, useRef } from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';
import { gsap, Power0 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const bigSmileyRef = useRef(null);
  const smallSmileyRef = useRef(null);
  const leafRef = useRef(null);
  const flowerRef = useRef(null);

  useEffect(() => {
    gsap.from(bigSmileyRef.current, {
      rotation: 0,
      duration: 2,
      ease: 'elastic.out(1, 0.3)',
    });

    gsap.to(smallSmileyRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: 'power2.in',
      scrollTrigger: {
        trigger: smallSmileyRef.current,
        start: 'top center+=100',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.to(leafRef.current, {
      rotation: 20,
      transformOrigin: 'top left',
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: Power0.easeNone,
    });

    gsap.fromTo(
      flowerRef.current,
      { x: '100%', y: '-100%', rotation: 45, opacity: 0 },
      {
        x: '0%',
        y: '0%',
        rotation: 0,
        opacity: 1,
        duration: 2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: flowerRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <Box
      my="8"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={10}
      backgroundColor="pink.100"
      h="100vh"
    >
      <Box flex="1">
        <Heading fontSize="3xl">Built out of frustration</Heading>
        <Heading fontSize="6xl" mt={2} color="blue.500">
          Meet the ahead app
        </Heading>
        <Center position="relative">
          <span
            ref={bigSmileyRef}
            role="img"
            aria-label="Big Smiley"
            style={{
              fontSize: '120px',
              display: 'inline-block',
              transformOrigin: 'center',
            }}
          >
            🙂
          </span>
          <span
            ref={smallSmileyRef}
            role="img"
            aria-label="Small Smiley"
            style={{
              fontSize: '48px',
              display: 'inline-block',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -150%)',
            }}
          >
            😃
          </span>
          <span
            ref={leafRef}
            role="img"
            aria-label="Leaf"
            style={{
              fontSize: '40px',
              display: 'inline-block',
              position: 'absolute',
              top: '70%',
              left: '70%',
              transformOrigin: 'top left',
            }}
          >
            🍃
          </span>
          <span
            ref={flowerRef}
            role="img"
            aria-label="Flower"
            style={{
              fontSize: '40px',
              display: 'inline-block',
              position: 'absolute',
              top: '0%',
              right: '0%',
              transformOrigin: 'top right',
            }}
          >
            🌼
          </span>
        </Center>
      </Box>
      <Box flex="1" textAlign="right">
        <Center mt={4}>
          <Text fontSize="2xl">
            A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
            Think of it as a pocket cheerleader towards a better, more fulfilling.
          </Text>
        </Center>
      </Box>
    </Box>
  );
};

export default Page3;
