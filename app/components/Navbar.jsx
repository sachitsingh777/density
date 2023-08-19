'use client'
import React from 'react';
import { Box, Flex, Spacer, Button } from '@chakra-ui/react';

function Navbar() {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex maxW="1200px" mx="auto" alignItems="center">
        {/* Left Section (Logo) */}
        <Box>
          {/* Add your logo or branding here */}
          Logo
        </Box>

        {/* Middle Section (Navigation Links) */}
        <Spacer />
        <Flex align="center">
          <Box mx={4}>Emotions</Box>
          <Box mx={4}>Manifesto</Box>
          <Box mx={4}>Awareness</Box>
          <Box mx={4}>Work</Box>
        </Flex>

        {/* Right Section (Download Button) */}
        <Button colorScheme="teal" size="md" ml={4}>
          Download
        </Button>
      </Flex>
    </Box>
  );
}

export default Navbar;
