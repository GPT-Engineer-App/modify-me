import { Container, Text, VStack, Heading, Button, IconButton } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Welcome to Your React App
        </Heading>
        <Text fontSize="lg">This is a bare-bones application built with React and Chakra UI.</Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
        <IconButton aria-label="Launch" icon={<FaRocket />} size="lg" />
      </VStack>
    </Container>
  );
};

export default Index;
