"use client"
import React, { useState } from 'react';
import { Box, Text, Flex, Center, Heading } from '@chakra-ui/react';

const Page4 = () => {
  const [selectedPoint, setSelectedPoint] = useState(0);

  const pointsData = [
    {
      title: 'Step 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Step 2',
      description: 'Nullam sit amet metus vel arcu vulputate viverra.',
    },
    {
      title: 'Step 3',
      description: 'Nunc nec libero ac ipsum ullamcorper vestibulum.',
    },
    {
      title: 'Step 4',
      description: 'Sed vitae orci lacinia, vehicula lorem nec, vulputate nulla.',
    },
    {
      title: 'Step 5',
      description: 'Donec non orci vitae ante cursus cursus.',
    },
  ];

  return (
    <Box my="40" display="flex" alignItems="center" justifyContent="center" p={10}>
       <Heading fontSize="3xl">Built out of frustration</Heading>
        <Heading fontSize="6xl" mt={2} color="blue.500">
          Meet the ahead app
        </Heading>
      <Box flex="1" position="relative">
        <Center>
          <Box w="2px" h="400px" bg="gray.400" position="absolute" left="40%" top="50%" transform="translateX(-50%) translateY(-50%)" zIndex="1">
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
  );
};

export default Page4;




