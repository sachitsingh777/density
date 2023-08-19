'use client'
import { Box, Flex, useBreakpointValue,Text } from '@chakra-ui/react';
import React from 'react'

const Page5 = () => {
    const textSize = useBreakpointValue({ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' });
  return (
    <Box>
        
          <Flex direction="row" alignItems="center" justifyContent="center" p={4} w="100%">
      <Text   fontSize={textSize} w="25%">EQ beats IQ</Text>
      <Box maxW="500px" textAlign="center" mt={4} w="30%">
        <Text>
          People with high Emotional Intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
        </Text>
       
      </Box>
      <Box maxW="500px" textAlign="center" mt={4} w="30%">
       
        <Text mt={2}>
          They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29K more per year.
        </Text>
      </Box>
    </Flex>
    </Box>
  )
}

export default Page5