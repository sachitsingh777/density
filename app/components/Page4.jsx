"use client"
import React, { useState } from 'react';
import { Box, Text, Flex, Center, Heading, useBreakpointValue } from '@chakra-ui/react';

const Page4 = () => {
  const [selectedPoint, setSelectedPoint] = useState(0);
  const textSize = useBreakpointValue({ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' });
  const pointsData = [
    {
      title: 'Its not as easy as 1-2-3',
      description: 'The journey of change may be long but our sessions are quick We get to the point and tell you what you want to know and nothing else.',
    },
    {
      title: 'Old habits are hard to break.',
      description: 'And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.',
    },
    {
      title: 'You and your motivation dont have a long-term relationship.',
      description: 'And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.',
    },
    {
      title: 'Old habits are hard to break.',
      description: 'And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.',
    },
    {
      title: 'Its not as easy as 1-2-3',
      description: 'The journey of change may be long but our sessions are quick We get to the point and tell you what you want to know and nothing else.',
    },
  ];

  return (
    <Box my="40">
      <Heading fontSize="xl">Wrong with self-improvement & how we are fixing it.</Heading>
        <Heading fontSize="4xl" mt={2} color="blue.500">
        Self-improvement. Ugh.
        </Heading>
    <Box m="30" display="flex" alignItems="center" justifyContent="center" p={10}>
       
      <Box flex="1" position="relative">
        <Center>
          <Box w="2px" h="400px" bg="gray.400" position="absolute" left="50%" top="50%" transform="translateX(-50%) translateY(-50%)" zIndex="1">
            {pointsData.map((point, index) => (
              <Box
                key={index}
                w="10px"
                h="10px"
                borderRadius="50%"
                bg={selectedPoint === index ? 'blue.500' : 'gray.300'}
                position="absolute"
                top={`${(index / (pointsData.length - 1)) * 100}%`}
                left="50%"
                transform="translate(-50%, -50%)"
                cursor="pointer"
                onClick={() => setSelectedPoint(index)}
              />
            ))}
          </Box>
        </Center>
        <Box zIndex="0" position="absolute" left="70%" top="50%" transform="translateX(-50%) translateY(-50%)" ml="20px">
          {pointsData.map((point, index) => (
            <Box key={index} mb="20px">
              <Text fontSize="xl" fontWeight={selectedPoint === index ? 'bold' : 'normal'}>
                {point.title}
              </Text>
              <Text fontSize="sm" opacity={selectedPoint === index ? 1 : 0.5}>
                {point.description}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>

    </Box>
  );
};

export default Page4;




