'use client'
import React, { useEffect , useRef} from 'react';
import { Flex, Box, Heading, Center } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {

    const headingRef = useRef(null);
  useEffect(() => {
    gsap.to('.cake-card', {
      xPercent: -100,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.cake-card',
        start: 'top bottom',
        scrub: true,
      },
    });
    gsap.from(headingRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      });
  }, []);

  return (
    <Flex direction="column"  p={4}>
           <Box flex="1">
      <Heading ref={headingRef}  fontSize={['3xl', '4xl', '6xl']} textAlign="left">Does this sound familiar...</Heading>
      </Box>
      <Center>
        <Flex m="8" gap="6">
          <Box className="cake-card" width="300px" bg="pink.300" borderRadius="8px" padding="16px">
            <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>
              🙂
            </span>
            <p>You argue with a colleague.</p>
            <p>You get angry and defensive instead of staying open and working towards common ground.</p>
          </Box>
          <Box className="cake-card" width="300px" bg="blue.300" borderRadius="8px" padding="16px">
            <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>
              🙂
            </span>
            <p>You attend a class reunion</p>
            <p>You compare yourself with your peers achievements instead of making your self-judgment more independent of others.</p>

          </Box>
          <Box className="cake-card" width="300px" bg="green.300" borderRadius="8px" padding="16px" transform="rotate(10deg)">
            <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>
              🙂
            </span>
            <p>You hit a dead end in a negotiation</p>
            <p>You get nervous frazzled and frustrated instead of staying optimistic and solution-oriented.</p>
          </Box>
          <Box className="cake-card" width="300px" bg="purple.300" borderRadius="8px" padding="16px">
            <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>
              🙂
            </span>
            <p>You are at a lively dinner party</p>
            <p>You play on your phone instead of
 striking up a chat</p>
          </Box>
          <Box className="cake-card" width="300px" bg="pink.300" borderRadius="8px" padding="16px">
            <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>
              🙂
            </span>
            <p>You argue with a colleague.</p>
            <p>You get angry and defensive instead of staying open and working towards common ground.</p>
          </Box>
          <Box className="cake-card" width="300px" bg="purple.300" borderRadius="8px" padding="16px">
            <span role="img" aria-label="Smiley Face" style={{ fontSize: '48px', marginBottom: '16px', display: 'block' }}>
              🙂
            </span>
            <p>You argue with a colleague.</p>
            <p>You get angry and defensive instead of staying open and working towards common ground.</p>
          </Box>
        </Flex>
      </Center>
    </Flex>
  );
};

export default Page2;

