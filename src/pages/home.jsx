import { Box, Container, ControlBox, Heading, Text, VStack } from "@chakra-ui/react";

const Jumbotron  = () => {
  return (
    <VStack
      spacing={8}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      py={24}
    >
      <Box>
        <Heading
          as="h1"
          fontFamily="body"
          bgColor="blue.400"
          bgClip="text"
          size="4xl"
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          className="jumbotron-name-heading"
        >
          Raghav Khurana
        </Heading>
      </Box>
      <Box>
        <Heading
          as="h2"
          size="lg"
          lineHeight="tall"
          color="gray.500"
          fontWeight="medium"
        >
          I&apos;m a{" "}
          <Box as="span" color="gray.300">
            future 
          </Box>
           {" "} DevOps{" "}
          <Box as="span" color="gray.300">
            Engineer{" "}
          </Box>{" "}
        </Heading>
      </Box>
      <Box>
        <Heading as="h3"
        fontWeight="md"
        size="md">
          <Box as="span" color="blue.400">
            Currently a Network Engineer and coding for fun!
          </Box>
        </Heading>
      <Box>
        <Heading
        as="h4"
        size="md"
        fontWeight="md">
          <Box as="span" color="gray.500">
            Connect with me on LinkedIn by clicking the button above!
          </Box>
        </Heading>
      </Box>
      </Box>
      <Container>
          
      </Container>
    </VStack>
  );
};

export default Jumbotron;