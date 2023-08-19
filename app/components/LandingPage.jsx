'use client'
import { Box, Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

export default function LandingPage() {
  const imageSrc =
    'https://storage.googleapis.com/web-api-media-uploads/media/Image_1_8d38f94793/Image_1_8d38f94793.svg';
    const textSize = useBreakpointValue({ base: 'md', sm: 'lg', md: 'xl', lg: '2xl' });
  const titleStyles = {
    base: { fontSize: '3xl' },
    md: { fontSize: '4xl' },
    lg: { fontSize: '5xl' },
  };

  return (
    <Box>
    <Stack minH="100vh" direction={{ base: 'column', md: 'row' }} bg={"purple.100"}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={6} w="full" maxW="lg">
          <Heading fontSize={titleStyles}>
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
                fontSize:"3xl"
              }}
            >
           Ahead App
            </Text>
           
          </Heading>
          <Text fontSize="6xl" color="gray.500">
           Master your life <br />{' '}by mastering <br />{' '}emotions
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button rounded="full" bg="black.400" color="white" _hover={{ bg: 'black.500' }}>
             <Image src="https://www.ahead-app.com/images/app-store.svg" alt="icon" />
            </Button>
            <Button rounded="full"><Image src="https://www.ahead-app.com/images/five-stars.png" alt="icon" /></Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt="Login Image" objectFit="cover" src={imageSrc} />
      </Flex>
    </Stack>
    <Flex direction="row" alignItems="center" justifyContent="center" p={4} w="100%">
      <Text fontSize={textSize} w="25%">EQ beats IQ</Text>
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
  );
}
